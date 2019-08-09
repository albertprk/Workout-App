import React, {Component} from 'react';
import {connect} from 'react-redux'
import {trainersFetchData, getTrainerByObjectID} from '../../actions/trainers'
import {} from '../../reducers/trainers'
import Spinner from '../Spinner'

const querystring = require('query-string');
import CommentForm from './CommentForm';
import ModalExampleSize from "./CertificateModal";
import {Rating } from 'semantic-ui-react'
import RateBarChart from "./RateBarChart";


// export default class TrainerInfo extends Component {

// need a ID.
// now by default we take the first Trainer in the array.
class TrainerInfo extends React.Component {
    constructor() {
        super();
        this.state = ({
            _id: "",
            firstName: "",
            lastName: "",
            gender: "",
            profilePicture: "",
            gym: [],
            description: "",
            email: "",
            phone: "",
            joiningDate: "",
            tag: "",
            tags: [],
            cost: 0,
            overall_rate: null,
            user: "",
            __v: "",
            comments: []
        });
    }


    componentDidMount() {
      // parse URL
      const querystring = require('query-string');
      const queries = querystring.parse(this.props.location.search);

      let objectid = this.props.thatTrainerInfoObjectId;
      if (queries.trainer) {
          objectid = queries.trainer;
      }

        this.props.getTrainerByObjectID(objectid)
        .then(result => {
            this.setState(result.data);
            //for debug purposes
``
        })
    }

    render() {

        if (this.props.hasErrored) {
            return <div>
                <p>Sorry! Error rendering</p>
            </div>
        }

        if (this.props.isLoading) {
            return <div align="center">
                <p>Loading...</p>
                <Spinner/>
            </div>
        }

        return (
            <div>
                {this.renderTrainer()}
            </div>
        )
    };


    renderTrainer() {
            // code for calculating average score for each trainer
            let targetTrainer = this.state;
            let avgScore = 0;
            let numReviews = 0;
            if (targetTrainer.comments.length === 0) {
                avgScore = 10.0;
            } else {
                targetTrainer.comments.map((comment, index) => {
                    avgScore += comment.rate;
                    numReviews++;
                });
                avgScore /= numReviews;
                avgScore = avgScore.toFixed(1);
            }

            let name = targetTrainer.firstName + " " + targetTrainer.lastName;
            if (targetTrainer._id === '5d10010e9112ea2c77b0a989') {
                name += " 🏆 (Trainer of the Month)";
            }

        var avgScoreRound = Math.round(avgScore);


            const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

        return (
            <div>
                <div className="ui segment">
                    <div className="ui two column very relaxed grid">
                        <div className="column">
                            <div className="ui items">
                                <div className="item">
                                    <div className="image">
                                        {/* todo: oliver Dynamic show this from Mongo data! */}
                                        <img src={targetTrainer.profilePicture}/>
                                    </div>
                                    <div className="content">
                                        <a className="header">{name}</a>
                                        <div className="meta">
                                            <span>Trainer at {targetTrainer.gym}</span>
                                        </div>
                                        <div className="description">
                                            <p>
                                                {targetTrainer.description}
                                            </p>
                                        </div>
                                        <div>
                                            <h3>
                                                {avgScore}/10
                                            </h3>

                                            <Rating maxRating={10} rating={avgScoreRound} icon='star' size='large' disabled/>


                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="ui label">
                                <i className="mail icon"/> {targetTrainer.email}
                            </div>

                            <div className="ui label">
                                <i className="globe icon"/> {targetTrainer.phone}
                            </div>

                            <br/>
                            <br/>
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

                            <br></br>
                            <div className="ui tag labels">
                                <a className="ui label">
                                    ${targetTrainer.cost}
                                </a>
                            </div>

                            <br></br>
                            <div>
                                {
                                    targetTrainer.comments.length !== 0 &&
                                    <RateBarChart comments = {targetTrainer.comments}/>
                                }
                            </div>


                            {
                                (avgScore >= 9) &&
                                (targetTrainer.comments.length >= 10) &&
                                <ModalExampleSize targetTrainer={targetTrainer} avgScore={avgScore}/>
                            }

                        </div>
                        <div className="column">
                            <div className="ui comments">
                                <div className="comment">
                                    <div className="content">
                                        <div>
                                            {
                                                targetTrainer.comments.length !== 0 &&
                                                targetTrainer.comments.map((comment, index) => {
                                                    if (comment != null) {
                                                        return (
                                                            <div key={index}>
                                                                <a className="author">{comment.fullname}</a>
                                                                <div className="metadata">
                                                                    <div className="date">
                                                                        {/* todo: oliver: get the subtraction of date */}
                                                                        {
                                                                            new Date(comment.date).getDate() + "-" + months[new Date(comment.date).getMonth()] + "-" + new Date(comment.date).getFullYear()
                                                                        }

                                                                    </div>

                                                                    <div className="rating">
                                                                        <i className="like icon"></i> {comment.rate}/10
                                                                    </div>

                                                                </div>
                                                                <div className="text">
                                                                    {comment.context}
                                                                </div>

                                                          </div>
                                                        )
                                                    }
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <CommentForm/>
                            </div>
                        </div>
                    </div>
                    <div className="ui vertical divider">
                        review
                    </div>
                </div>
            </div>
        );

    }
}

const mapStateToProps = (state) => {
    return {
        trainersList: state.trainersReducer,
        hasErrored: state.trainersErrored,
        isLoading: state.trainersLoading,
        thatTrainerInfoObjectId: state.trainerId,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(trainersFetchData(url)),
        getTrainerByObjectID: (id) => dispatch(getTrainerByObjectID(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TrainerInfo);
