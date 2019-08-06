import React, {Component} from 'react';

export default class Home extends Component {
    render() {
        return (
            <div className="slider-holder">
                <span id="slider-image-1"/>
                <span id="slider-image-2"/>
                <div className="image-holder">
                    <img src="https://i.imgur.com/VCCqCYE.png" className="#slider-image-1"/>
                    <img src="https://i.imgur.com/Ev11XHG.png" className="#slider-image-2"/>
                </div>
                <div className="button-holder">
                    <a href="#slider-image-1" className="slider-change"/>
                    <a href="#slider-image-2" className="slider-change"/>
                </div>
            </div>
        )
    }
}