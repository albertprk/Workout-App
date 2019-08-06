import React from 'react';
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {addSortingTag} from "../../actions/sortingTags";
import {gymSearchName} from "../../actions/gyms";

class GymCard extends React.Component {

    addSortingTag = (tag) => {
        if (this.props.gSearchName) this.props.gymSearchName("");
        this.props.addSortingTag(tag);
    }

    render() {
        var now = new Date();
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var todayIndex = now.getDay();

        return (
            <div>
                <div className="ui divided items">
                    <div className="item">
                        <div className="ui large image">
                            <img src={this.props.gym.picture} alt=""/>
                        </div>
                        <div className="content">
                            <a className="header">{this.props.gym.name}</a>
                            <div className="meta">
                                <span className="cinema">
                                    {this.props.gym.description}
                                </span>
                            </div>

                            <NavLink
                                className="ui primary button"
                                to={"trainers?gym=" + JSON.stringify(this.props.gym.name)}
                            >
                                See trainers at {this.props.gym.name}
                                <i className="right chevron icon"/>
                            </NavLink>

                            <div className="content">
                                <div className="extra">
                                    {
                                        this.props.gym.tags.map((tag) => {
                                            return (
                                                <button
                                                    className="ui button"
                                                    onClick={() => {this.addSortingTag(tag)}}
                                                >
                                                    {tag}
                                                </button>
                                            );
                                        })
                                    }
                                </div>

                                <div className="bottom aligned">
                                    <p>
                                        {this.props.gym.spiel}
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
                                        {this.props.gym.name}
                                    </a>
                                    <div className="meta">
                                        <span className="date">
                                            Open {days[todayIndex]} {this.props.gym.hours[todayIndex]}
                                        </span>
                                    </div>
                                    <div className="description">
                                        {this.props.gym.description}
                                    </div>
                                </div>
                                <div className="extra content">
                                    <a>
                                        <i className="user icon"/>
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

const mapStateToProps = (state) => {
    return {
        gSearchName: state.gymSearchName,
        sortingTagList: state.manageSortingTags
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        gymSearchName: (name) => dispatch(gymSearchName(name)),
        addSortingTag: (sortingTag) => dispatch(addSortingTag(sortingTag))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GymCard);