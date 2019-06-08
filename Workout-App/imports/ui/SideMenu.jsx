import React, { Component } from 'react';
import Page from './Page';

export default class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textvalue: 'Gym'
    };

}

//update the textvalue to the part user clicks, need to rewrite this to combined all 4 into one function
handleclickgym() {
  this.setState({
    textvalue: "Gym"
  });
}

handleclicktrainers() {
  this.setState({
    textvalue: "Trainers"
  });
}

handleclicktrainer() {
  this.setState({
    textvalue: "Trainer"
  })
}

//page is responsible for rendering the content after selecting a tab on the side menu

  render() {
    return (
    <div className="__sidemenu">
      <div class="ui grid">
        <div class="four wide column">
          <div class="ui vertical fluid tabular menu">
            <a class="item" onClick={this.handleclickgym.bind(this)}>
              Gym
            </a>
            <a class="item" onClick={this.handleclicktrainers.bind(this)}>
              Trainers
            </a>
            <a class="item" onClick={this.handleclicktrainer.bind(this)}>
              Trainer
            </a>
            <a class="item">
              Account
            </a>
          </div>
        </div>
        <div class="twelve wide stretched column">
          <div class="ui segment">
            <Page value={this.state.textvalue}/>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
