import React, { Component } from 'react';

export default class Hello extends Component {

  render() {
    return (
      <div class="header" id="header">
        <img src="/image/logo.png" height="110px" width="161px" />
        <a href="findgym.html">
          <button id="getStarted" id="startButton">GET STARTED TODAY!</button>
        </a>
      </div>
    );
  }
}
