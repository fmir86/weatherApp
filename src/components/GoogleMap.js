import React, {Component} from "react";

class GoogleMap extends Component{
    // A built-in method that is called right after the component renders on screen.
    componentDidMount(){
        new google.maps.Map(this.refs.map,{
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }

    render(){
        return <div ref="map"></div>
    }
}

export default GoogleMap;