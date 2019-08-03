import React, {Component} from 'react';
import {connect} from 'react-redux'
import {trainersFetchData} from '../../actions/trainers'
import {} from '../../reducers/trainers'
import Spinner from '../Spinner'

const querystring = require('query-string');
import CommentForm from './CommentForm';


// export default class TrainerInfo extends Component {

// need a ID.
// now by default we take the first Trainer in the array.
class TrainerInfo extends React.Component {
    constructor() {
        super();
    }


    componentDidMount() {
        this.props.fetchData("http://localhost:9000/trainers")
        // const queries = querystring.parse(this.props.location.search);
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
        // todo: show specific trainer, not 0
        // this.props.trainersList

        // todo: Oliver investigate why this part has been called three times

        console.log("all three trainers : ")
        console.log(this.props.trainersList)

        if (this.props.trainersList.length === 0) {
            return (
                <div>
                    rendering
                </div>
            )
        } else {

            var thatTrainerId = this.props.thatTrainerInfoObjectId;
            var targetTrainer = this.props.trainersList.find(x => x._id === thatTrainerId);

            // code for calculating average score for each trainer
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
                                            <a className="header">{targetTrainer.firstName + " " + targetTrainer.lastName}</a>
                                            <div className="meta">
                                                <span>Trainer at {targetTrainer.gym}</span>
                                                <span> {this.props.thatTrainerInfoObjectId}</span>
                                            </div>
                                            <div className="description">
                                                <p>
                                                    {targetTrainer.description}
                                                </p>
                                            </div>
                                            <div>
                                                {avgScore}/10
                                            </div>
                                            {/* <div className="extra">
                recommended by 36 other users
              </div> */}
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
        fetchData: (url) => dispatch(trainersFetchData(url))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TrainerInfo);

 
