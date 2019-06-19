import React from 'react';

export default class GymCard extends React.Component {
    render() {
        return (
            <div>
                <div className="ui divided items">
                    <div className="item">
                        <div className="ui large image">
                            <img src="https://i.imgur.com/LrlfMk1.jpg" alt=""/>
                        </div>
                        <div className="content">
                            <a className="header">Ron Zalko's Fitness</a>
                            <div className="meta">
                                <span className="cinema">
                                    Weightlifting gym and yoga studio in the heart of Kitsilano
                                </span>
                            </div>


                            <div className="ui primary button">
                                See trainers at Ron Zalko's Fitness
                                <i className="right chevron icon"></i>
                            </div>
                            <div className="content">
                                <div className="extra">
                                    <div className="ui label">Weightlifting</div>
                                    <div className="ui label">Kickboxing</div>
                                    <div className="ui label">Cardio</div>
                                    <div className="ui label">Trainers</div>
                                    <div className="ui label">Yoga</div>
                                </div>

                                <div className="bottom aligned">
                                    <p>
                                        At Ron Zalko Fitness & Yoga in Vancouver, we offer the very best to meet all your health and fitness needs. From a state of the art gym facility for strength and cardio training to our spacious studio for group exercise, Ron Zalko Fitness centre has everything you need for your focused workout,  get in shape and have fun doing it!
                                    </p>
                                </div>
                            </div>
                        </div>



                        <div className="content">
                            <div className="ui card">
                                <div className="image medium">
                                    <img src="https://i.imgur.com/WMq5Sux.png"/>
                                </div>
                                <div className="content">
                                    <a className="header">
                                        Zalko's Gym
                                    </a>
                                    <div className="meta">
                                        <span className="date">
                                            Open today until 8pm
                                        </span>
                                    </div>
                                    <div className="description">
                                        lorem ipsum lorem ipsum lorem ipsum
                                    </div>
                                </div>
                                <div className="extra content">
                                    <a>
                                        <i className="user icon"></i>
                                        22 swolr members checked in here
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className="item">
                        <div className="ui large image">
                            <img src="https://recreation.ubc.ca/files/2015/08/IMG_9892-bikes.jpg" alt=""/>
                        </div>
                        <div className="content">
                            <a className="header">The Bird Coop</a>
                            <div className="meta">
                                <span className="cinema">
                                    Weightlifting gym at UBC
                                </span>
                            </div>


                            <div className="ui primary button">
                                See trainers at The Coop
                                <i className="right chevron icon"></i>
                            </div>
                            <div className="content">
                                <div className="extra">
                                    <div className="ui label">Weightlifting</div>
                                    <div className="ui label">Kickboxing</div>
                                    <div className="ui label">Cardio</div>
                                    <div className="ui label">Trainers</div>
                                    <div className="ui label">Yoga</div>
                                </div>

                                <div className="bottom aligned">
                                    <p>
                                        Come to the coop to get your squat rack sniped by some jacked up guido who is going to use it to do wrist curls in the middle of his 11 machine circuit! If you're hardcore, feel free to join us in the back for snorting lines of preworkout every hour!
                                    </p>
                                </div>
                            </div>
                        </div>



                        <div className="content">
                            <div className="ui card">
                                <div className="image medium">
                                    <img src="https://i.imgur.com/WMq5Sux.png"/>
                                </div>
                                <div className="content">
                                    <a className="header">
                                        The coop
                                    </a>
                                    <div className="meta">
                                        <span className="date">
                                            Never closes, even for Christmas
                                        </span>
                                    </div>
                                    <div className="description">
                                        lorem ipsum lorem ipsum lorem ipsum
                                    </div>
                                </div>
                                <div className="extra content">
                                    <a>
                                        <i className="user icon"></i>
                                        22 swolr members checked in here
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>










                    <div className="item">
                        <div className="image">
                            <img src="https://i.imgur.com/LrlfMk1.jpg" alt=""/>
                        </div>
                        <div className="content">
                            <a className="header">Alternate - smaller rows</a>
                            <div className="meta">
                                <span className="cinema">
                                    a place to wait in line for a squat rack
                                </span>
                            </div>
                            <div className="description">
                                <p></p>
                            </div>
                            <div className="extra">
                                <div className="ui right floated primary button">
                                    See trainers at Bird Coop
                                    <i className="right chevron icon"></i>
                                </div>
                                <div className="ui label">Bros</div>
                                <div className="ui label">Kickboxing</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )


    }
}
