import React, { Component } from 'react';

export default class TrainersMenu extends Component {

  render() {
    return (
        <div className="__trainers-menu-bar">
          <div className="ui pointing menu">
            <a className="item">
              Trainers
            </a>
            <div className="right menu">
              <div className="item">
                <div className="ui transparent icon input">
                  <input type="text" placeholder="Search trainers..."/>
                  <i className="search link icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

    );
  }
}
