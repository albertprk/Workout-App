import React from 'react';
import {connect} from 'react-redux'
import {trainersFetchData, trainerInfoObjectId, trainerSearchName} from '../../actions/trainers'
// import {} from '../../reducers/trainers'
import Spinner from '../Spinner'
import TrainersMenu from './TrainersMenu';
import {removeAllSortingTags, removeSortingTag} from "../../actions/sortingTags";

const querystring = require('query-string');

class TrainerCards extends React.Component {
    componentDidMount() {
        this.props.fetchData("/trainersAPI");
        this.props.removeAllSortingTags();
        this.props.trainerSearchName("");
    }

    renderTags = () => {
        return this.props.sortingTagsList.map((tag) => {
            return (
                <div
                    className="ui button"
                    onClick={() => {
                        this.props.removeSortingTag(tag)
                    }}
                >
                    {tag}
                </div>
            )
        });
    };

    render() {
        if (this.props.hasErrored) {
            return <div>
                <TrainersMenu/>
                <br/>
                <p>Sorry! Error rendering</p>
            </div>
        }

        if (this.props.isLoading) {
            return <div>
                <TrainersMenu/>
                <br/>
                <div align="center">
                    <p>Loading...</p>
                    <Spinner/>
                </div>
            </div>
        }

        return (
            <div>
                <TrainersMenu/>
                <br/>
                {this.renderTags()}
                <br/>
                <br/>
                {this.renderTrainerCards()}
            </div>
        )
    };

    renderTrainerCards() {
        const queries = querystring.parse(this.props.location.search);
        var allTrainers = this.props.trainersList;
        const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

        if (allTrainers.length === 0) {
            return (
                <div>
                    List of trainers is empty
                </div>
            )
        } else {
            return (
                <div>
                    <div className="ui link cards">
                        {
                            allTrainers.map((targetTrainer, index) => {
                                // field for sorting by tags
                                let contains = true;
                                for (let i = 0; i < this.props.sortingTagsList.length; i++) {
                                    if (!targetTrainer.tags.includes(this.props.sortingTagsList[i])) {
                                        contains = false;
                                    }
                                }
                                // below if statement renders all trainers based on:
                                //      if sorting tags are present
                                //      user is searching by name
                                //      URL contains a specific trainer
                                if ((!queries.gym && !this.props.tSearchName && (this.props.sortingTagsList.length === 0 || contains))
                                    || (this.props.tSearchName && this.props.tSearchName === (targetTrainer.firstName + " " + targetTrainer.lastName))
                                    || (queries.gym && targetTrainer.gym === queries.gym.replace(/"/g, "") && !this.props.tSearchName)) {
                                    // code for calculating average score for each trainer
                                    let avgScore = 0;
                                    let numReviews = 0;
                                    if (targetTrainer.comments.length === 0) {
                                        avgScore = 10.0;
                                        numReviews = 1;
                                    } else {
                                        targetTrainer.comments.map((comment, index) => {
                                            avgScore += comment.rate;
                                            numReviews++;
                                        });
                                        avgScore /= numReviews;
                                        avgScore = avgScore.toFixed(1);
                                    }

                                    return (
                                        <div className="card" onClick={() => {
                                            this.props.changeTrainerInfoObjectId(targetTrainer._id);
                                            this.props.history.push("/mytrainers?trainer=" + targetTrainer._id);
                                        }}>
                                            <div className="image">
                                                <img src={targetTrainer.profilePicture}/>
                                            </div>
                                            <div className="content">
                                                <div
                                                    className="header">{targetTrainer.firstName + " " + targetTrainer.lastName}</div>
                                                <div className="meta">
                                                    <a>Trainer at {targetTrainer.gym}</a>
                                                </div>
                                                <div className="description">
                                                    {targetTrainer.description}
                                                </div>
                                            </div>
                                            <div className="extra content">

                                                <h3>{avgScore}/10</h3>

                                                <div className="ui labels">
                                                    {
                                                        targetTrainer.tags.map((tag, index) => {
                                                            return (
                                                                <div className="ui label" key={index}>
                                                                    {tag}
                                                                </div>
                                                            )
                                                        })

                                                    }
                                                </div>

                                                <span className="right floated">
                                                Joined in {new Date(targetTrainer.joiningDate).getDate() + "-" + months[new Date(targetTrainer.joiningDate).getMonth()] + "-" + new Date(targetTrainer.joiningDate).getFullYear()}
                                            </span>
                                                {/*<span>*/}
                                                {/*/!* // todo: make it dynamic *!/*/}
                                                {/*    <i className="user icon"/>*/}
                                                {/*Hired by 75 users*/}
                                                {/*</span>*/}
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        trainersList: state.trainersReducer,
        hasErrored: state.trainersErrored,
        isLoading: state.trainersLoading,
        tSearchName: state.trainerSearchName,
        sortingTagsList: state.manageSortingTags
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(trainersFetchData(url)),
        changeTrainerInfoObjectId: (trainerId) => dispatch(trainerInfoObjectId(trainerId)),
        trainerSearchName: (name) => dispatch(trainerSearchName(name)),
        removeSortingTag: (sortingTag) => dispatch(removeSortingTag(sortingTag)),
        removeAllSortingTags: () => dispatch(removeAllSortingTags())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TrainerCards);
