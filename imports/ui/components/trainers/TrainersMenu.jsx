import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Icon} from 'semantic-ui-react'
import {trainerSearchName} from "../../actions/trainers";
import {addSortingTag, removeAllSortingTags} from "../../actions/sortingTags";
import {gymTagsFetchData} from "../../actions/gymTags";

class TrainersMenu extends Component {
    constructor() {
        super();
        this.state = ({
            trainerSearchName: "",
            tag: ""
        })
    }

    addSortingTag = (e) => {
        e.preventDefault();
        if (this.props.tSearchName) {
            this.props.trainerSearchName("");
        }
        this.props.addSortingTag(this.state.tag);
        this.setState({tag: ""})
    };

    searchTrainerName = (e) => {
        e.preventDefault();
        if (this.props.tagsList.length) {
            this.props.removeAllSortingTags();
        }
        this.props.trainerSearchName(this.state.trainerSearchName);
        this.setState({trainerSearchName: ""})
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
        this.props.removeAllSortingTags();
        this.setState({ trainerSearchName: "" });
    };

    gymTags = () => {
        if (this.props.tagsList.length === 0) {
            this.props.fetchGymsTags("/gymsAPI/tags");
            // Hard Code Change later!
        }
        return this.props.tagsList.map((tag) => {
            return (<option> {tag} </option>)
        });
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
                                onSubmit={this.addSortingTag}
                            >
                                <input
                                    type="text"
                                    placeholder="Search trainers by tags..."
                                    id="tagInput"
                                    name="tagInput"
                                    list="gymTags"
                                    value={this.state.tag}
                                    onChange={ (e) => {
                                        this.setState({tag: e.target.value})
                                    }}
                                />
                                <datalist id="gymTags">
                                    {
                                        this.gymTags()
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
        tagsList: state.gymsTagsReducer,
        tSearchName: state.trainerSearchName,
        sortingTagsList: state.manageSortingTags
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        trainerSearchName: (name) => dispatch(trainerSearchName(name)),
        fetchGymsTags: (url) => dispatch(gymTagsFetchData(url)),
        removeAllSortingTags: () => dispatch(removeAllSortingTags()),
        addSortingTag: (sortingTag) => dispatch(addSortingTag(sortingTag)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrainersMenu)
