import React, { Component } from 'react';
import TrainerCard from './TrainerCard';
import TrainersMenu from './TrainersMenu';
import TrainerRow from './TrainerRow';
import TrainerInfo from './TrainerInfo';
import GymCard from './GymCard'
import GymMenu from './GymMenu'
import Gyms from './Gyms'

import { connect } from "react-redux";
import { updatePage } from "../actions/page";

class Page extends Component {
    render() {
        if (this.props.currentPage === 'Trainers') {
            return (
                <center>
                  <div>
                      <TrainersMenu />
                      <br />
                      <TrainerCard />
                      //// TODO:
                      // just testing redux, REMOVE later
                      <h1>{this.props.currentPage}</h1>
                  </div>
                </center>
            );
        }
        if (this.props.currentPage === 'Trainer') {
            return (
              <center>
                <div>
                    <br/>
                    <TrainerRow />
                    <br />
                    <TrainerInfo/>
                </div>
              </center>
            );
        }
        if (this.props.currentPage === 'Gym') {
            return (
              <center>
                <div>
                    <Gyms/>
                </div>
              </center>
            )
        } else {
            return (
                <div>
                    <p>to be implemented</p>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
  return {
        currentPage: state.currentPage
  };
}

export default connect(mapStateToProps, { updatepage: updatePage })(Page);
