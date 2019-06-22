import React, { Component } from 'react';
import Page from './Page';
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
