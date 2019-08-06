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

    getLatLong = (address, f) => {
        Geocode.setApiKey('AIzaSyBIrx-1nADNA9oGYFhPFbh2hkxQinBCZqo');
        return new Promise((resolve, reject) => {
            Geocode.fromAddress(address).then(
                response => {
                    const {lat, lng} = response.results[0].geometry.location;
                    console.log("address to lat long");
                    console.log(lat, lng);
                    resolve(lat, lng);
                },
                error => {
                    console.log("error getting lat long from address");
                    reject(new Error("cant find address " + address));
                }
            );
        })

    }

    render() {
        var {gymLat, gymLong} = this.getLatLong(this.props.gym.address);
        console.log("lat and long:");
        console.log(gymLat, gymLong);
        return (
            <div className="mapBox" id="mapBox">
                <Map
                    google={this.props.google}
                    zoom={10}
                    style={mapStyles}
                    initialCenter={{ lat: 49.2418, lng: -123.1126}}
                >
                    <Marker
                        name={this.props.gym.name}
                        position={{gymLat, gymLong}}
                    />
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBIrx-1nADNA9oGYFhPFbh2hkxQinBCZqo')
})(GymMap);
