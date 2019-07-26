import React, {Component} from 'react';

export default class GymMenu extends Component {

    render() {
        return (
            <div className="__gym-menu-bar">
                <center>
                    <div className="ui pointing menu">
                        <a className="item">
                            Gym
                        </a>
                        <div className="right menu">
                            <div className="item">
                                <div className="ui transparent icon input">
                                    <input type="text" placeholder="Search gyms..."/>
                                    <i className="search link icon"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </center>
            </div>

        );
    }
}
