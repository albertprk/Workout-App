import React, { Component } from 'react';

export default class TrainerInfo extends Component {

  render() {
    return (
    <div>
    <div class="ui label">
        <i class="mail icon"></i> therock@gmail.com
    </div>

    <br/>
    <br/>
    <div class="ui labels">
      <div class="ui label">
        Power
      </div>
      <div class="ui label">
        Arm
      </div>
      <div class="ui label">
        Cardio
      </div>
      <div class="ui label">
        Chest
      </div>
    </div>

    <br></br>
    <div class="ui tag labels">
      <a class="ui label">
        $30.99/hr
      </a>
    </div>


    <div class="ui comments">
      <div class="comment">
        <div class="content">
          <a class="author">Stevie Feliciano</a>
          <div class="metadata">
            <div class="date">2 days ago</div>
            <div class="rating">
              <i class="star icon"></i>
              5 Faves
            </div>
          </div>
          <div class="text">
            Hey guys, I highly recommend The Rock as a trainer. He's very friendly and professionl
          </div>

          <a class="author">Danny Rose</a>
          <div class="metadata">
            <div class="date">3 days ago</div>
            <div class="rating">
              <i class="star icon"></i>
              5 Faves
            </div>
          </div>
          <div class="text">
            Expensive but worthy it!
          </div>


          <a class="author">Veronica Alet</a>
          <div class="metadata">
            <div class="date">5 days ago</div>
            <div class="rating">
              <i class="star icon"></i>
              5 Faves
            </div>
          </div>
          <div class="text">
            Very good trainer. 5/5 recommended
          </div>

        </div>
      </div>
    </div>
</div>


    );
  
}
}
