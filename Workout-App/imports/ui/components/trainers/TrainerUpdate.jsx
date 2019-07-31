import React from 'react';
import update from 'react-addons-update'
import {connect} from 'react-redux'
import {getTrainer} from '../../actions/trainers'
import FileBase64 from "react-file-base64";
import Spinner from '../Spinner'
import {gymsFetchData} from "../../actions/page";
import {trainerTagsFetchData} from "../../actions/trainerTags";

class TrainerUpdate extends React.Component {
    constructor(props) {
        super(props);

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

    componentDidMount   ()  {
      let currentuser = Meteor.userId();
      if(currentuser) {
        this.props.getTrainer(currentuser)
          .then(result => {
              console.log("wtf how did this work" + JSON.stringify(result.data))
              this.setState(result.data);
              console.log(this.state)
        })

      }
    }

    getFiles = (pic) => {
        this.setState({profilePicture: pic[0].base64});
        console.log(this.state);
    };

    handleSubmit = (e) => {
      let user = Meteor.userId();
      if (user === null) {
        console.log("not logged in");
        alert('Please Signin or Signup first');
      } else {

        //TODO: its safer to make this update in the server but due to datbase issues, the call is made in client side but only user itself can modify its account
        if(Meteor.userId()) {
        Meteor.users.update({ _id: Meteor.userId() }, { $set: { Trainer: true } });
        }
          //update state just incase it changed
          this.setState( { user: user });
          console.log("updated user to" + user);
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
            this.props.fetchTrainersTags("http://localhost:9000/trainers/tags");
            // Hard Code Change later!
        }
        console.log(this.props.trainerTagsList);
        return this.props.trainerTagsList.map((tag)=>{
            return ( <option> {tag} </option>)
        });
    };


    render() {

        if (this.props.gymsList.length == 0) {
            this.props.fetchData("http://localhost:9000/gyms");
            // Hard Code Change later!
        }

        if (this.props.trainerTagsList.length == 0) {
            this.props.fetchTrainersTags("http://localhost:9000/trainers/tags");
            // Hard Code Change later!
        }

        console.log(this.props.trainerTagsList);

        const gymList = this.props.gymsList;
        const gymNameList = gymList.map(function (el) { return el.name;});

        return (
            <div>
                <form
                    className="ui form"
                >
                    <h4 className="ui dividing header">Edit Your Information Below</h4>
                    <div className="field">
                        <label>Name</label>
                        <div className="fields">
                            <div className="five wide field">
                                <input
                                    type="text"
                                    value= {this.state.firstName}
                                    id="firstName"
                                    required="required"
                                    onChange={(e) => {
                                        this.setState({firstName: e.target.value})
                                    }}
                                />
                            </div>
                            <div className="five wide field">
                                <input
                                    type="text"
                                    value= {this.state.lastName}
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
                            <select className="ui dropdown"
                                    id="gender"
                                    value= {this.state.gender}
                                    required="required"
                                    onChange={
                                        (e) => {
                                            this.setState(
                                                {gender: e.target.value})
                                        }
                                    }>
                                <option value= "-">  -  </option>
                                <option value= "Male">Male</option>
                                <option value= "Female">Female</option>
                                <option value= "Other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="field">
                        <label>Primary Gym</label>
                        <div className="fields">
                            <div className="eight wide field">
                                <select className="ui dropdown"
                                        id="gym"
                                        required="required"
                                        value= {this.state.gym}
                                        onChange={
                                            (e) => {
                                                this.setState({gym: e.target.value})
                                            }}>
                                    <option value>Gym Name</option>
                                    {
                                        gymNameList.map((name) => {
                                            return (<option value = {name}> {name} </option>)
                                        })
                                    }
                                </select>

                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label>Contact Information</label>
                        <div className="fields">
                            <div className="six wide field">
                                <input
                                    type="text"
                                    value= {this.state.phone}
                                    id="phone"
                                    required="required"
                                    onChange={(e) => {
                                        this.setState({phone: e.target.value})
                                    }}
                                />
                            </div>
                            <div className="six wide field">
                                <input
                                    type="text"
                                    value= {this.state.email}
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
                            <div className="eight wide field">
                                <FileBase64
                                    multiple={ true }
                                    onDone={ this.getFiles.bind(this) } />
                                {/*<input*/}
                                {/*    type="text"*/}
                                {/*    id="profilepicture"*/}
                                {/*    placeholder="Profile Picture URL"*/}
                                {/*    required="required"*/}
                                {/*    onChange={(e) => {*/}
                                {/*        this.setState({profilePicture: e.target.value})*/}
                                {/*    }}*/}
                                {/*/>*/}
                            </div>
                        </div>
                    </div>


                    <div className="field">
                        <label>Rate</label>
                        <div className="three wide field">
                            <div className="ui labeled input">
                                <label for="amount" className="ui label">$</label>
                                <input
                                    type="text"
                                    id="cost"
                                    value= {this.state.cost}
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
                                    row="3"
                                    type="text"
                                    id="description"
                                    value= {this.state.description}
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
                        <div className="field">
                            <div className="ui right labeled left icon input">
                                <i className="tags icon"></i>
                                <input
                                    type="text"
                                    placeholder="Enter tags"
                                    id="tagInput"
                                    value={this.state.tag}
                                    required="required"
                                    list = "trainerTags"
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
                            TODO: add u[date method tmr
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
        trainerTagsList :state.trainersTagsReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTrainer: (id) => dispatch(getTrainer(id)),
        fetchData: (url) => dispatch(gymsFetchData(url)),
        fetchTrainersTags: (url) => dispatch(trainerTagsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrainerUpdate);
