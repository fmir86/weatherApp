import React, {Component} from "react";

class GoogleMap extends Component{
    // A built-in method that is called right after the component renders on screen.
    componentDidMount(){
        // The Maps script is only loaded when GOOGLE_MAPS_API_KEY is set (see src/index.js).
        if (!window.google || !window.google.maps) {
            this.refs.map.textContent = "Map unavailable (GOOGLE_MAPS_API_KEY not set)";
            return;
        }
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