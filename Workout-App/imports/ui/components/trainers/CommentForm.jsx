import React from 'react';
import {Rating, Header, Image, Modal, Form, Input, TextArea, Button, RatingProps} from 'semantic-ui-react'
import {connect} from "react-redux";

import {trainerCommentUpdate} from "../../actions/trainerCommentUpdate";
import {trainersFetchData} from "../../actions/trainers";
import Spinner from "../Spinner";

class CommentForm extends React.Component{
    constructor(props){
        super(props);

        this.state = ({
            fullname: "",
            context: "",
            date: new Date(),
            rate: "",
            modalOpen: false
        });
    }

    handleOpen = () => this.setState({ modalOpen: true });
    handleClose = () => this.setState({ modalOpen: false });



    // handleChange = e => this.setState({ rating: e.target.value })
    handleUpdateComment = () => {
        if (this.state.fullname !== "" && this.state.context !== "" && this.state.rate !== ""){
            const commentObject = {
                fullname: this.state.fullname,
                context: this.state.context,
                date: this.state.date,
                rate: this.state.rate,
            };
            this.props.updateComment(commentObject,this.props.thatTrainerInfoObjectId);

            while(true){
                if (!this.props.isLoading){
                    this.handleClose();
                    this.props.fetchData("https://swolrinfoapi.herokuapp.com/trainersAPI");
                    alert('Thank you for your comment and rating');
                    break;
                }
            }
            if (this.props.isLoading){
                alert("something wrong with Sync")
            }
            window.location.reload();

        }
        else {
            alert('Please fill out all the information')
        }
    };

    render() {

        if (this.props.hasErrored) {
            return <div>
                <p>Sorry! Error rendering</p>
            </div>
        }


        if (this.props.isLoading) {
            return <div align="center">
                <p>Updating the comment...</p>
                <Spinner/>
            </div>
        }

        if (this.props.isLoadingForTrainersLoading) {
            return <div align="center">
                <p>Loading the trainer...</p>
                <Spinner/>
            </div>
        }
        return(
            <div>
                <Modal
                    trigger={<Button onClick={this.handleOpen}>Leave a comment and rate</Button>}
                       open={this.state.modalOpen}
                       onClose={this.handleClose}
                >



                <br />
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Field
                                    id='form-input-control-full-name'
                                    control={Input}
                                    required
                                    onChange={(e) => {
                                        this.setState({fullname: e.target.value})
                                    }}
                                    label='Full name'
                                    placeholder='Full name'
                                />
                            </Form.Group>

                            <Form.Field
                                id='form-textarea-control-opinion'
                                control={TextArea}
                                required
                                label='Comment'
                                onChange={(e) => {
                                    this.setState({context: e.target.value})
                                }}
                                placeholder='Please leave your comment on this trainer here'
                            />

                            <div>
                                <div>Rating: {this.state.rate}</div>
                                <input type='range' min={0} max={10} value={this.state.rate}
                                       onChange={(e) => {
                                    this.setState({rate: e.target.value})
                                }}
                                />
                                <br />
                                <Rating icon='star' rating={this.state.rate} maxRating={10} />
                            </div>

                            <br/>
                            <br/>

                        </Form>

                    <Button
                        id='confirmButton'
                        onClick={
                            this.handleUpdateComment
                        }

                    >
                        Confirm
                    </Button>

                <br />
                </Modal>

            </div>
        )
        }
}
const mapStateToProps = (state) => {
    return {
        hasErrored: state.trainerCommentUpdateErrored,
        isLoading: state.trainerCommentUpdateLoading,
        isLoadingForTrainersLoading: state.trainersLoading,
        thatTrainerInfoObjectId: state.trainerId,
        trainersList: state.trainersReducer,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateComment: (comment,trainerObjectID) => dispatch(trainerCommentUpdate(comment,trainerObjectID)),
        fetchData: (url) => dispatch(trainersFetchData(url))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
