import React, { Component } from 'react';
import TrainerCard from './TrainerCard';
import TrainersMenu from './TrainersMenu';
import TrainerRow from './TrainerRow';
import TrainerInfo from './TrainerInfo';
import GymCard from './GymCard'
import GymMenu from './GymMenu'

import { connect } from "react-redux";
import { updatepage } from "../actions/page";


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
                <div>
                    <br/>
                    <TrainerRow />
                    <br />
                    <TrainerInfo/>
                </div>
            );
        }
        if (this.props.value === 'Gym') {
            return (
                <div>
                    <GymMenu/>
                    <br/>
                    <GymCard/>
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
