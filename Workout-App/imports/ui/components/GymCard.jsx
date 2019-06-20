import React from 'react';

export default class GymCard extends React.Component {
    constructor(props) {
        super(props);
    }
<<<<<<< HEAD
=======



>>>>>>> 55e02fba6947661ad3b2f2b7917a47d55189c8bc
    render() {
        var now = new Date();
        var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
        var todayIndex = now.getDay();

        return (
            <div>
                <div className="ui divided items">
                    <div className="item">
                        <div className="ui large image">
                            <img src="https://i.imgur.com/LrlfMk1.jpg" alt=""/>
                        </div>
                        <div className="content">
                            <a className="header">{ this.props.gym.name }</a>
                            <div className="meta">
                                <span className="cinema">
                                    { this.props.gym.description }
                                </span>
                            </div>


                            <div className="ui primary button">
                                See trainers at { this.props.gym.name }
                                <i className="right chevron icon"></i>
                            </div>
                            <div className="content">
                                <div className="extra">
                                    {
                                        this.props.gym.tags.map((tag) => {
                                            return <div className="ui label">{ tag }</div>;
                                        })
                                    }
                                </div>

                                <div className="bottom aligned">
                                    <p>
                                        { this.props.gym.spiel }
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
                                        { this.props.gym.name }
                                    </a>
                                    <div className="meta">
                                        <span className="date">
                                            Open today { this.props.gym.hours[todayIndex] }
                                        </span>
                                    </div>
                                    <div className="description">
                                        { this.props.gym.description }
                                    </div>
                                </div>
                                <div className="extra content">
                                    <a>
                                        <i className="user icon" />
                                        22 swolr members checked in here
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )


    }
}
