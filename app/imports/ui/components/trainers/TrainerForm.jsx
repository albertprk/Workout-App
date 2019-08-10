import React from 'react';
import update from 'react-addons-update'
import {connect} from 'react-redux'
import {addTrainer} from '../../actions/trainers'
import FileBase64 from "react-file-base64";
import {gymsFetchData} from "../../actions/page";
import {trainerTagsFetchData} from "../../actions/trainerTags"
import Spinner from "../Spinner";

class TrainerForm extends React.Component {
    constructor(props) {
        super(props);

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
            user: Meteor.userId(),
            comments: []
        });

        this.handleSubmit = this.handleSubmit.bind(this.state);
    }

    getFiles = (pic) => {
        this.setState({profilePicture: pic[0].base64});
    };

    handleSubmit = (e) => {
      let user = Meteor.userId();
      if (user === null) {
        alert('Please Signin or Signup first');
      } else if(Meteor.user().Trainer) {
        //Prevent mutiple trainer profile per account
        alert('You already have an existing Trainer');
        }
        else {

        //TODO: its safer to make this update in the server but due to datbase issues, the call is made in client side but only user itself can modify its account
        if(Meteor.userId()) {
          Meteor.users.update({ _id: Meteor.userId() }, { $set: { Trainer: true } });
        }
        //update state just incase it changed
        this.setState( { user: user });
        this.props.addTrainer(this.state);
        }
    }

    addTag = (e) => {
        e.preventDefault();
        this.setState({tags: [...this.state.tags, this.state.tag]});
        this.setState({tag: ""});
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
                    onClick={() => this.removeTag(tag)}
                >
                    {tag}
                </li>
            )
        })
    };

    renderTrainerTags = () => {
        if (this.props.trainerTagsList.length == 0) {
            this.props.fetchTrainersTags("mongodb+srv://m001-student:m001-mongodb-basics@sandbox-kclfx.mongodb.net:27017/trainers/tags");
            // Hard Code Change later!
        }
        return this.props.trainerTagsList.map((tag) => {
            return (<option> {tag} </option>)
        });
    };


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

        if (this.props.gymsList.length === 0) {
            this.props.fetchData("/gyms");
            // Hard Code Change later!
        }

        if (this.props.trainerTagsList.length === 0) {
            this.props.fetchTrainersTags("mongodb+srv://m001-student:m001-mongodb-basics@sandbox-kclfx.mongodb.net:27017/trainers/tags");
            // Hard Code Change later!
        }

        const gymList = this.props.gymsList;
        const gymNameList = gymList.map(function (el) {
            return el.name;
        });

        return (
            <div>
                <form
                    className="ui form"
                >
                    <h4 className="ui dividing header">Signup as a Trainer</h4>
                    <div className="field">
                        <label>Name</label>
                        <div className="fields">
                            <div className="four wide field">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    id="firstName"
                                    required="required"
                                    onChange={(e) => {
                                        this.setState({firstName: e.target.value})
                                    }}
                                />
                            </div>
                            <div className="four wide field">
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    id="lastName"
                                    required="required"
                                    onChange={(e) => {
                                        this.setState({lastName: e.target.value})
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label>Gender</label>
                        <div className="fields">
                            <div className="four wide field">
                                <select className="ui dropdown"
                                        id="gender"
                                        required="required"
                                        onChange={
                                            (e) => {
                                                this.setState(
                                                    {gender: e.target.value})
                                            }
                                        }>
                                    <option value="-"> -</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label>Primary Gym</label>
                        <div className="fields">
                            <div className="four wide field">
                                <select className="ui dropdown"
                                        id="gym"
                                        required="required"
                                        onChange={
                                            (e) => {
                                                this.setState({gym: e.target.value})
                                            }}>
                                    <option value>Gym Name</option>
                                    {
                                        gymNameList.map((name) => {
                                            return (<option value={name}> {name} </option>)
                                        })
                                    }
                                </select>

                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label>Contact Information</label>
                        <div className="fields">
                            <div className="four wide field">
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    id="phone"
                                    required="required"
                                    onChange={(e) => {
                                        this.setState({phone: e.target.value})
                                    }}
                                />
                            </div>
                            <div className="four wide field">
                                <input
                                    type="text"
                                    placeholder="Email"
                                    id="email"
                                    required="required"
                                    onChange={(e) => {
                                        this.setState({email: e.target.value})
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label>Profile Picture</label>
                        <div className="fields">
                            <div className="four wide field">
                                <FileBase64
                                    multiple={true}
                                    onDone={this.getFiles.bind(this)}/>
                            </div>
                        </div>
                    </div>


                    <div className="field">
                        <label>Rate</label>
                        <div className="four wide field">
                            <div className="ui labeled input">
                                <label for="amount" className="ui label">$</label>
                                <input
                                    type="text"
                                    id="cost"
                                    placeholder="Desired Rate"
                                    required="required"
                                    onChange={(e) => {
                                        this.setState({cost: e.target.value})
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label>Description Of Yourself</label>
                        <div className="fields">
                            <div className="eight wide field">
                                <textarea
                                    id="description"
                                    placeholder="Description"
                                    required="required"
                                    onChange={(e) => {
                                        this.setState({description: e.target.value})
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <form
                        className="ui form"
                        onSubmit={this.addTag}
                    >
                        <h4 className="ui dividing header">Tags</h4>
                        <div className="eight wide field">
                            <div className="ui right labeled left icon input">
                                <i className="tags icon"/>
                                <input
                                    type="text"
                                    placeholder="Enter tags"
                                    id="tagInput"
                                    value={this.state.tag}
                                    required="required"
                                    list="trainerTags"
                                    onChange={(e) => {
                                        this.setState({tag: e.target.value});
                                    }}
                                />

                                <datalist id="trainerTags">
                                    {
                                        this.renderTrainerTags()
                                    }
                                </datalist>

                                <button
                                    className="ui tag label"
                                    id="tagButton"
                                >
                                    Add Tag
                                </button>
                            </div>
                        </div>
                        <div className="field">
                            <ul>
                                {this.renderTags()}
                            </ul>
                        </div>
                    </form>


                    <div className="field">
                        <button
                            className="ui button primary"
                            id="addTrainer"
                            onClick={this.handleSubmit}
                        >
                            Submit Trainer
                        </button>
                    </div>
                </form>


            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        gymsList: state.gymsReducer,
        trainerTagsList: state.trainersTagsReducer,
        hasErrored: state.trainersTagsErrored,
        isLoading: state.trainersTagsLoading,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTrainer: (Trainer) => dispatch(addTrainer(Trainer)),
        fetchData: (url) => dispatch(gymsFetchData(url)),
        fetchTrainersTags: (url) => dispatch(trainerTagsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrainerForm);
