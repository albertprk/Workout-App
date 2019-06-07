import React, { Component } from 'react';
import TrainerCard from './TrainerCard';
import TrainersMenu from './TrainersMenu';

export default class Page extends React.Component {



  render() {
      if (this.props.value === 'Trainers') {
        return (
          <div>
            <TrainersMenu />
            <br />
            <TrainerCard />
          </div>
      );
    } else {
      return (
        <div>
          <p>to be implemented</p>
        </div>
    );
    }
  }
}
