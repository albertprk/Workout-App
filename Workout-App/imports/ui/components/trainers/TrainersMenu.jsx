import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Icon} from 'semantic-ui-react'
import {trainerSearchName} from "../../actions/trainers";

class TrainersMenu extends Component {
    constructor() {
        super();
        this.state = ({
            trainerSearchName: "",
            tag: ""
        })
    }

    searchTrainerName = (e) => {
        e.preventDefault();
        this.props.trainerSearchName(this.state.trainerSearchName);
    };

    trainerNames = () => {
        const trainersList = this.props.trainersList;
        const trainersNamesList = trainersList.map(function (e1) {
            return (e1.firstName + " " + e1.lastName)
        });
        return trainersNamesList.map((trainerName) => {
            return (<option> {trainerName} </option>)
        });
    };

    clearSearch = (e) => {
        e.preventDefault();
        this.props.trainerSearchName("");
        this.setState({ trainerSearchName: "" });
    };

    render() {
        return (
            <div className="__trainers-menu-bar">
                <div className="ui pointing menu">
                    <a className="item">
                        Trainers
                    </a>

                    <div className="right menu">

                        {/*search trainers by tags*/}
                        <div className="item">
                            <form
                                className="ui transparent icon input"
                            >
                                <input
                                    type="text"
                                    placeholder="Search trainers by tags..."
                                    id="tagInput"
                                    name="tagInput"
                                    list="gymTags"
                                    value={this.state.tag}
                                    onChange={ (e) => {
                                        // tag input here
                                    }}
                                />
                                <datalist id="gymTags">
                                    {
                                        // this.trainerTags()
                                    }
                                </datalist>
                                <Icon className="search icon" size='large'/>
                            </form>
                        </div>

                        {/*search trainers by name*/}
                        <div className="item">
                            <form
                                className="ui transparent icon input"
                                onSubmit={this.searchTrainerName}
                            >
                                <input
                                    type="text"
                                    placeholder="Search trainers by name..."
                                    id="trainerSearchName"
                                    name="trainerSearchName"
                                    list="trainerNames"
                                    value={this.state.trainerSearchName}
                                    onChange = {(e) => {
                                        this.setState({trainerSearchName: e.target.value})
                                    }}
                                />
                                <datalist id="trainerNames">
                                    {
                                        this.trainerNames()
                                    }
                                </datalist>
                                <Icon className="search icon" size='large'/>
                            </form>
                        </div>

                        {/*button to clear search parameters*/}
                        <div
                            className="item"
                            onClick={this.clearSearch}
                        >
                            <Icon className="times circle icon" size='large'/>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        trainersList: state.trainersReducer,
        trainerSearchName: state.trainerSearchName
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        trainerSearchName: (name) => dispatch(trainerSearchName(name)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrainersMenu)