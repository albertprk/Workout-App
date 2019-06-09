import React, { Component } from 'react';


export default class TrainerRow extends Component {
  render() {
    return (

      <div class="ui items">
        <div class="item">
          <div class="image">
            <img src="/image/trainer1.jpg" />
          </div>
          <div class="content">
            <a class="header">The Rock</a>
            <div class="meta">
              <span>verified personal trainer</span>
            </div>
            <div class="description">
              <p>The Rock works out 2 times a day for hours and eats 5000 calories to stay THE ROCK</p>
            </div>
            <div class="extra">
              recommended by 36 other users
            </div>
          </div>
        </div>
      </div>




    );
  }
}
