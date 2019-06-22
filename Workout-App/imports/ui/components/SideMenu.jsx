import React, { Component } from 'react';
import Page from './Page';
import { connect } from 'react-redux';
import './../../../client/main.css';
import { updatePage } from "../actions/page";

class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.props.currentPage
    };
  }

  //update the text value to the part user clicks, need to rewrite this to combined all 4 into one function
  handleClickGym = () => {
    this.props.updatePage("Gym");
  };

  handleClickTrainers = () => {
    this.props.updatePage("Trainers");
  };

  handleClickTrainer = () => {
    this.props.updatePage("Trainer");
  };


//page is responsible for rendering the content after selecting a tab on the side menu

  render() {
    return (
    <div className="__sidemenu">
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
        <div className="sixteen wide stretched column">
          <div className="ui segment">
            <Page value={this.state.textvalue}/>
          </div>
        </div>
      </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePage: (currentPage) => dispatch(updatePage(currentPage))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu)
