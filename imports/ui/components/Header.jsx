import React, {Component} from 'react';
import './../../../client/main.css';

export default class Hello extends Component {

    render() {
        return (
            <div className="header" id="header">
                <div className="logo" id="logo">
                    <img src="/image/swolr.png" width="150px" height="55px"/>
                </div>
            </div>
        );
    }
}
