import React, {Component} from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import './../../../../client/main.css';
import Geocode from "react-geocode";

const mapStyles = {
    width: '300px',
    height: '250px',
};

class GymMap extends Component {
    constructor(props) {
        super(props);
    }

    getLatLong = (gym, f) => {
        // Geocode.setApiKey('AIzaSyBIrx-1nADNA9oGYFhPFbh2hkxQinBCZqo');
        return new Promise((resolve, reject) => {
            Geocode.fromAddress(gym.address).then(
                response => {
                    const {lat, lng} = response.results[0].geometry.location;
                    console.log("address for " + gym.name + "to lat long");
                    console.log(lat, lng);
                    resolve(lat, lng);
                },
                error => {
                    console.log("error getting lat long from address");
                    reject(new Error("cant find address " + address));
                }
            );
        })
    };

    render() {
        // do not uncomment the next line! calls google maps API
        // var {gymLat, gymLong} = this.getLatLong(this.props.gym);
        return (
            <div className="mapBox" id="mapBox">
                <Map
                    google={this.props.google}
                    zoom={12}
                    style={mapStyles}
                    initialCenter={{ lat: this.props.gym.lat, lng: this.props.gym.long}}
                >
                    <Marker
                        name={this.props.gym.name}
                        lat={this.props.gym.lat}
                        long={this.props.gym.long}
                    />
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ""//'AIzaSyBIrx-1nADNA9oGYFhPFbh2hkxQinBCZqo'
})(GymMap);
