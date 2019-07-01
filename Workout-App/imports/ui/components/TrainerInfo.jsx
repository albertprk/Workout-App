import React, { Component } from 'react';

export default class TrainerInfo extends Component {

  render() {
    return (
        <div>
          <div className="ui label">
            <i className="mail icon"></i> therock@gmail.com
          </div>

          <br/>
          <br/>
          <div className="ui labels">
            <div className="ui label">
              Power
            </div>
            <div className="ui label">
              Arm
            </div>
            <div className="ui label">
              Cardio
            </div>
            <div className="ui label">
              Chest
            </div>
          </div>

          <br></br>
          <div className="ui tag labels">
            <a className="ui label">
              $30.99/hr
            </a>
          </div>


          <div className="ui comments">
            <div className="comment">
              <div className="content">
                <a className="author">Stevie Feliciano</a>
                <div className="metadata">
                  <div className="date">2 days ago</div>
                  <div className="rating">
                    <i className="star icon"></i>
                    5 Faves
                  </div>
                </div>
                <div className="text">
                  Hey guys, I highly recommend The Rock as a trainer. He's very friendly and professionl
                </div>

                <a className="author">Danny Rose</a>
                <div className="metadata">
                  <div className="date">3 days ago</div>
                  <div className="rating">
                    <i className="star icon"></i>
                    5 Faves
                  </div>
                </div>
                <div className="text">
                  Expensive but worthy it!
                </div>


                <a className="author">Veronica Alet</a>
                <div className="metadata">
                  <div className="date">5 days ago</div>
                  <div className="rating">
                    <i className="star icon"></i>
                    5 Faves
                  </div>
                </div>
                <div className="text">
                  Very good trainer. 5/5 recommended
                </div>

              </div>
            </div>
          </div>
        </div>


    );

  }
}
