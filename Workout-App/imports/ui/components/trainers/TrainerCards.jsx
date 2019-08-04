import React from 'react';
import {connect} from 'react-redux'
import {trainersFetchData, trainerInfoObjectId} from '../../actions/trainers'
import {} from '../../reducers/trainers'
import Spinner from '../Spinner'
import TrainersMenu from './TrainersMenu';

const querystring = require('query-string');

class TrainerCards extends React.Component {
    componentDidMount() {
        this.props.fetchData("http://localhost:9000/trainers")
    }

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
                    rendering
                </div>
            )
        } else {
            return (
                <div>

                    <div className="ui link cards">
                        {
                            allTrainers.map((targetTrainer, index) => {
                                // below if statement renders all trainers if no gym query exists
                                // if it does exist it only shows the trainers at that gym
                                if (!queries.gym || targetTrainer.gym === queries.gym.replace(/"/g, "")) {

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
                                            this.props.changetrainerInfoObjectId(targetTrainer._id);
                                            this.props.history.push("/mytrainers?trainer=" + targetTrainer.email);
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
                                                <span>
                                                {/* // todo: make it dynamic */}
                                                    <i className="user icon"/>
                                                Hired by 75 users
                                            </span>
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
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(trainersFetchData(url)),
        changetrainerInfoObjectId: (trainerId) => dispatch(trainerInfoObjectId(trainerId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TrainerCards);
