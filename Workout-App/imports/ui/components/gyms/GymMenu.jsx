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

    searchGymName = (e) => {
        e.preventDefault();
        console.log("SUBMITTED");
        console.log(this.props.searchName);
        this.props.gymSearchName(this.state.gymSearchName);
    };

    gymNames = () => {
        const gymList = this.props.gymsList;
        const gymNameList = gymList.map(function (el) {
            return el.name;
        });
        return gymNameList.map((gymName) => {
            return (<option> {gymName} </option>)
        });
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
                            <form
                                className="ui transparent icon input"
                                onSubmit={this.searchGymName}
                            >
                                <input
                                    type="text"
                                    placeholder="Search gyms by name..."
                                    id="gymSearchName"
                                    name="gymSearchName"
                                    list="gymNames"
                                    onChange={(e) => {
                                        this.setState({gymSearchName: e.target.value})
                                    }}
                                />
                                <datalist id="gymNames">
                                    {
                                        this.gymNames()
                                    }
                                </datalist>
                                <i className="search link icon"/>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        gymsList: state.gymsReducer,
        searchName: state.gymSearchName
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        gymSearchName: (name) => dispatch(gymSearchName(name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GymMenu);