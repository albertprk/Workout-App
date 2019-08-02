import React, {Component} from 'react';
import {connect} from 'react-redux'
import {gymSearchName} from '../../actions/gyms'


class GymMenu extends Component {
    constructor() {
        super();
        this.state = ({
            gymSearchName: ""
        })
    }

    handleSubmit =(e) => {
        e.preventDefault();
        this.props.gymSearchName(this.state.gymSearchName);
    };

    render() {
        return (
            <div className="__gym-menu-bar">
                    <div className="ui pointing menu">
                        <a className="item">
                            Gym
                        </a>
                        <div className="right menu">


                            <div className="item">
                                <div className="ui transparent icon input">
                                    <input
                                        type="text"
                                        placeholder="Search gyms by tags..."
                                    />
                                    <i className="search link icon"/>
                                </div>
                            </div>


                            <div className="item">
                                <div className="ui transparent icon input">
                                    <input
                                        type="text"
                                        placeholder="Search gyms by name..."
                                        id="gymSearchName"
                                        name="gymSearchName"
                                        onSubmit={(e) => {
                                            this.setState({gymSearchName: e.target.value})
                                        }}
                                    />
                                    <i
                                        className="search link icon"
                                        onClick={this.handleSubmit}
                                    />
                                </div>
                            </div>


                        </div>
                    </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        gymsList: state.gymsReducer
        // gymSearchName: state.gymSearchName
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        gymSearchName: (name) => dispatch(gymSearchName(name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GymMenu);