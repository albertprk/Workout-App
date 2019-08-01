import React from 'react';
import { Rating, Header, Image, Modal,Form, Input, TextArea, Button  } from 'semantic-ui-react'
import {connect} from "react-redux";
import {trainerInfoObjectId, trainersFetchData} from "../../actions/trainers";

class CommentForm extends React.Component{
    constructor(props){
        super(props);

        this.state = ({
            comments: []
        });
    }

        render() {

        return(
            <div>
                <Modal trigger={<Button>Leave a comment and rate</Button>}>



                <br />
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Field
                                    id='form-input-control-full-name'
                                    control={Input}
                                    label='Full name'
                                    placeholder='Full name'
                                />
                            </Form.Group>

                            <Form.Field
                                id='form-textarea-control-opinion'
                                control={TextArea}
                                label='Comment'
                                placeholder='Please leave your comment on this trainer here'
                            />

                            <p>Please leave a rate out of 10 </p>
                            <Rating maxRating={10} defaultRating={8} icon='star' />

                            <br/>
                            <br/>

                            <Form.Field
                                id='form-button-control-public'
                                control={Button}
                                content='Confirm'
                            />
                        </Form>

                <br />
                </Modal>

            </div>
        )
        }
}
const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
