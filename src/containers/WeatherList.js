import React, {Component} from "react";
import { connect } from "react-redux";
import Chart from "../components/Chart";

class WeatherList extends Component{

    renderWeather(cityData){

        const temps = cityData.list.map( item => item.main.temp - 273.15 ); // K to Celsius
        const pressures = cityData.list.map( item => item.main.pressure );
        const humidities = cityData.list.map( item => item.main.humidity );

        return(
            <tr key={cityData.city.id}>
                <td>{cityData.city.name}</td>
                <td><Chart data={temps} color="red" unit="C"/></td>
                <td><Chart data={pressures} color="blue" unit="hPa"/></td>
                <td><Chart data={humidities} color="green" unit="%"/></td>

            </tr>
        );
    }

    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}


function mapStateToProps({weather}){
    return {weather}; // === {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);