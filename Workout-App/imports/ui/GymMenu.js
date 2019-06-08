import React, {Component} from 'react';

export default class GymMenu extends Component {

    render() {
        return (
            <div className="__gym-menu-bar">
                <div class="ui pointing menu">
                    <a class="item">
                        Gym
                    </a>
                    <div class="right menu">
                        <div class="item">
                            <div class="ui transparent icon input">
                                <input type="text" placeholder="Search gyms..."/>
                                <i class="search link icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
