import React, { Component } from 'react';
import TrainerCards from './trainers/TrainerCards';
import TrainersMenu from './trainers/TrainersMenu';
import TrainerRow from './trainers/TrainerRow';
import TrainerInfo from './trainers/TrainerInfo';
import Account from './Account'
import Gyms from './gyms/Gyms'

import { connect } from "react-redux";
import { updatepage } from "../actions/page";

class Page extends Component {
    render() {
        if (this.props.currentpage === 'Trainers') {
            return (
                <center>
                  <div>
                      <TrainersMenu />
                      <br />
                      <TrainerCards />
                      //// TODO:
                      // just testing redux, REMOVE later
                      <h1>{this.props.currentpage}</h1>
                  </div>
                </center>
            );
        } else if (this.props.currentpage === 'Trainer') {
            return (
              <center>
                <div>
                    <br/>
                    {/* todo: Rename to Trainers */}
                    <br />
                    <TrainerInfo firtName = "Rock" lastName="Li"  />
                </div>
              </center>
            );
        } else if (this.props.currentpage === 'Gym') {
            return (
              <center>
                <div>
                    <Gyms/>
                </div>
              </center>
            )
        } else if (this.props.currentpage === 'Account') {
            return (
                <div>
                    <Account/>
                </div>
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
        currentpage: state.currentpage
  };
}

export default connect(mapStateToProps, { updatepage })(Page);
