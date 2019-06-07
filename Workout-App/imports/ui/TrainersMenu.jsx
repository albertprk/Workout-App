import React, { Component } from 'react';

export default class TrainersMenu extends Component {

  render() {
    return (
    <div className="__trainers-menu-bar">
      <div class="ui pointing menu">
        <a class="item">
          Trainers
        </a>
        <div class="right menu">
          <div class="item">
            <div class="ui transparent icon input">
              <input type="text" placeholder="Search trainer..." />
              <i class="search link icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    );
  }
}
