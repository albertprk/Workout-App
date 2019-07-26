import React, {Component} from 'react';
import {connect} from 'react-redux'
import {trainersFetchData} from '../../actions/trainers'
import {} from '../../reducers/trainers'
import Spinner from '../Spinner'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import TrainerEditForm from "./TrainerEditForm";


// export default class TrainerInfo extends Component {

// need a ID.
// now by default we take the first Trainer in the array.
class TrainerInfo extends React.Component {
    constructor() {
        super();
        this.state = ({
            firstName: "",
            lastName: "",
            gender: "",
            profilePicture: "",
            gym: "",
            description: "",
            email: "",
            phone: "",
            joiningDate: new Date().toLocaleString(),
            tag: "",
            tags: [],
            cost: 0,
            overall_rate: null,
            comments: []
        });

        this.handleSubmit = this.handleSubmit.bind(this.state);

    }

    handleSubmit = (e) => {

        this.props.addTrainer(this.state);
        e.preventDefault();
    }

    addTag = (e) => {
        e.preventDefault();
        this.setState({tags: [...this.state.tags, this.state.tag]} );
        this.setState( { tag: "" });
        this.renderTags();
    };

    removeTag = (tagToRemove) => {
        this.setState({
            tags: this.state.tags.filter((tag) => tag !== tagToRemove)
        })
    };


    renderTags = () => {
        return this.state.tags.map((tag) => {
            return (
                <li
                    className="ui button primary"
                    onClick={() => this.removeTag(tag) }
                >
                    { tag }
                </li>
            )
        })
    };


    componentDidMount() {
        console.log("mouting");
        this.props.fetchData("http://localhost:9000/trainers")
        console.log("mounted");
        console.log(this.props)
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

        if (this.props.trainersList.length == 0) {
            return (
                <div>
                    rendering
                </div>
            )
        } else {

            var thatTrainerId = this.props.thatTrainerInfoObjectId;
            var targetTrainer = this.props.trainersList.find(x => x._id == thatTrainerId);




            const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

            return (
                <div>
                    <div className="ui items">
                        <div className="item">
                            <div className="image">
                                {/* todo: oliver Dynamic show this from Mongo data! */}
                                <img src={targetTrainer.profilePicture}/>
                            </div>
                            <div className="content">
                                <a className="header">{targetTrainer.firstName + " " + targetTrainer.lastName}</a>
                                <div className="meta">
                                    <span>verified personal trainer</span>
                                    <span> {this.props.thatTrainerInfoObjectId}</span>
                                </div>
                                <div className="description">
                                    <p>
                                        {targetTrainer.description}
                                    </p>
                                </div>
                                {/* <div className="extra">
                recommended by 36 other users 
              </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="ui label">
                        <i className="mail icon"></i> {targetTrainer.email}
                    </div>

                    <div className="ui label">
                        <i className="globe icon"></i> {targetTrainer.phone}
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


                    <div className="ui comments">
                        <div className="comment">
                            <div className="content">
                                <div>
                                    {
                                        targetTrainer.comments.map((comment, index) => {
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


                                        })
                                    }
                                </div>


                            </div>
                        </div>
                    </div>

                    <button className="ui button">
                        Leave a Comment and Rate
                    </button>

                    <Modal trigger={<Button>Edit</Button>}>
                        <Modal.Header>Profile Picture</Modal.Header>
                        <Modal.Content image>
                            <Image wrapped size='medium' src={targetTrainer.profilePicture}e />
                        </Modal.Content>

                        <TrainerEditForm
                            targetTrainer={targetTrainer}
                        />


                        <Modal.Actions>
                            <Button primary>
                                Proceed <Icon name='right chevron' />
                            </Button>
                        </Modal.Actions>
                    </Modal>

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

 
