import React, { Component } from 'react';
import Page from './Page';
<<<<<<< HEAD
import { connect } from 'react-redux';
import './../../../client/main.css';

class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentpage: this.props.currentpage
    };
  }

  //update the textvalue to the part user clicks, need to rewrite this to combined all 4 into one function
  handleClickGym = () => {
    this.props.updatepage("Gym");
  }

  handleClickTrainers = () => {
    this.props.updatepage("Trainers");
  }

  handleClickTrainer = () => {
    this.props.updatepage("Trainer");
  }

=======

export default class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textvalue: 'Gym'
    };

}

//update the textvalue to the part user clicks, need to rewrite this to combined all 4 into one function
handleClickGym() {
  this.setState({
    textvalue: "Gym"
  });
}

handleClickTrainers() {
  this.setState({
    textvalue: "Trainers"
  });
}

handleclicktrainer() {
  this.setState({
    textvalue: "Trainer"
  })
}
>>>>>>> 55e02fba6947661ad3b2f2b7917a47d55189c8bc

//page is responsible for rendering the content after selecting a tab on the side menu

  render() {
    return (
    <div className="__sidemenu">
<<<<<<< HEAD
      <div className="navigationMenu">
          <div className="navItem" onClick={this.handleClickGym}>
            Gym
          </div>
          <div className="navItem" onClick={this.handleClickTrainers}>
            Trainers
          </div>
          <div className="navItem" onClick={this.handleClickTrainer}>
            myTrainers
          </div>
          <div className="navItem">
            Account
          </div>
      </div>
      <div className="ui grid">
        <div className="twelve wide stretched column">
          <div className="ui segment">
=======
      <div class="ui grid">
        <div class="four wide column">
          <div class="ui vertical fluid tabular menu">
            <a class="item" onClick={this.handleClickGym.bind(this)}>
              Gym
            </a>
            <a class="item" onClick={this.handleClickTrainers.bind(this)}>
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
>>>>>>> 55e02fba6947661ad3b2f2b7917a47d55189c8bc
            <Page value={this.state.textvalue}/>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
<<<<<<< HEAD


const mapStateToProps = (state) => {
  return {
    currentpage: state.currentpage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatepage: (currentpage) =>
      {dispatch({type: 'UPDATE_PAGE', currentpage: currentpage})
  }}
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu)
=======
>>>>>>> 55e02fba6947661ad3b2f2b7917a47d55189c8bc
