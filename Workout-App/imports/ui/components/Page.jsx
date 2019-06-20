import React, { Component } from 'react';
import TrainerCard from './TrainerCard';
import TrainersMenu from './TrainersMenu';
import TrainerRow from './TrainerRow';
import TrainerInfo from './TrainerInfo';
import GymCard from './GymCard'
import GymMenu from './GymMenu'
import Gyms from './Gyms'

import { connect } from "react-redux";
import { updatepage } from "../actions/page";

<<<<<<< HEAD
class Page extends Component {
    render() {
        if (this.props.currentpage === 'Trainers') {
            return (
                <center>
                  <div>
                      <TrainersMenu />
                      <br />
                      <TrainerCard />
                      //// TODO:
                      // just testing redux, REMOVE later
                      <h1>{this.props.currentpage}</h1>
                  </div>
                </center>
            );
        }
        if (this.props.currentpage === 'Trainer') {
            return (
              <center>
=======

class Page extends React.Component {



    render() {
        if (this.props.value === 'Trainers') {
            return (
                <div>
                    <TrainersMenu />
                    <br />
                    <TrainerCard />
                    //// TODO:
                    // just testing redux, REMOVE later
                    <h1>{this.props.currentpage}</h1>
                </div>
            );
        }
        if (this.props.value === 'Trainer') {
            return (
>>>>>>> 55e02fba6947661ad3b2f2b7917a47d55189c8bc
                <div>
                    <br/>
                    <TrainerRow />
                    <br />
                    <TrainerInfo/>
                </div>
<<<<<<< HEAD
              </center>
            );
        }
        if (this.props.currentpage === 'Gym') {
            return (
              <center>
                <div>
                    <Gyms/>
                </div>
              </center>
=======
            );
        }
        if (this.props.value === 'Gym') {
            return (
                <div>
                    <Gyms/>
                </div>
>>>>>>> 55e02fba6947661ad3b2f2b7917a47d55189c8bc
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
<<<<<<< HEAD
        currentpage: state.currentpage
  };
}
=======
          currentpage: state.currentpage
         };
  }
>>>>>>> 55e02fba6947661ad3b2f2b7917a47d55189c8bc

export default connect(mapStateToProps, { updatepage })(Page);
