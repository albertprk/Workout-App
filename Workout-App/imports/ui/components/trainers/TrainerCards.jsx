import React from 'react';
import {connect} from 'react-redux'
import {trainersFetchData, trainerInfoObjectId} from '../../actions/trainers'
import {} from '../../reducers/trainers'
import Spinner from '../Spinner'
import TrainersMenu from './TrainersMenu';

const querystring = require('query-string');

class TrainerCards extends React.Component {
    componentDidMount() {
        console.log("mouting");
        this.props.fetchData("http://localhost:9000/trainers")
        console.log("mounted");
        console.log(this.props)

        const queries = querystring.parse(this.props.location.search);
        console.log("QUERYS:");
        console.log(queries);
        console.log(queries.gym);
        console.log(queries.tags);
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
                {this.renderTrainerCards()}
            </div>
        )
    };

    renderTrainerCards() {
        const queries = querystring.parse(this.props.location.search);
        console.log("in trainerCard page");
        console.log(this.props.trainersList);
        var allTrainers = this.props.trainersList;
        console.log("this.props.trainersList length");
        console.log(this.props.trainersList.length);
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
                    <TrainersMenu/>
                    <br/>
                    <div className="ui link cards">
                        {
                            allTrainers.map((targetTrainer, index) => {
                                // below if statement renders all trainers if no gym query exists
                                // if it does exist it only shows the trainers at that gym
                                if (!queries.gym || targetTrainer.gym.includes(queries.gym.replace(/"/g, ""))) {
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
                                                    <a>verified personal trainer</a>
                                                </div>
                                                <div className="description">
                                                    {targetTrainer.description}
                                                </div>
                                            </div>
                                            <div className="extra content">
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