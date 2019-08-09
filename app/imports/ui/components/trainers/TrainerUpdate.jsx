import React from 'react';
import {connect} from 'react-redux'
import {getTrainer, updateTrainer} from '../../actions/trainers'
import FileBase64 from "react-file-base64";
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




    componentDidMount() {
      let currentuser = Meteor.userId();
      if(currentuser && Meteor.user().Trainer) {
        this.props.getTrainer(currentuser)
          .then(result => {
              this.setState(result.data);
        })

      } else if(currentuser === null) {
        alert('Please Signin or Signup first');
      } else {
        alert('Please sign up as a trainer first! Click ok to be redirected to the signup page');
        this.props.history.push("/account/addtrainer")
      }
    }

    getFiles = (pic) => {
        this.setState({profilePicture: pic[0].base64});
    };

    handleSubmit = (e) => {
      e.preventDefault();
      let user = Meteor.userId();
      if (user === null) {
        alert('Please Signin or Signup first');
      } else {
        console.log("starting update")
        this.props.updateTrainer(user, this.state)
          .then(result => {
              if (result.success) {
                alert("update successful");
              } else {
                alert("something went wrong, lets try this again")
              }
          })
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
        if (this.props.trainerTagsList.length === 0) {
            this.props.fetchTrainersTags("/swolr/trainers/tags");
            // Hard Code Change later!
        }
        return this.props.trainerTagsList.map((tag)=>{
            return ( <option> {tag} </option>)
        });
    };


    render() {

        if (this.props.gymsList.length === 0) {
            this.props.fetchData("/swolr/gyms");
            // Hard Code Change later!
        }

        if (this.props.trainerTagsList.length === 0) {
            this.props.fetchTrainersTags("/swolr/trainers/tags");
            // Hard Code Change later!
        }

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
                            <div className="four wide field">
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
                            <div className="four wide field">
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
                            <div className="four wide field">
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
                    </div>

                    <div className="field">
                        <label>Primary Gym</label>
                        <div className="fields">
                            <div className="four wide field">
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
                            <div className="four wide field">
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
                            <div className="four wide field">
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
                        <label>Profile Picture (Only submit a new file to change your picture)</label>
                        <div className="fields">
                            <div className="four wide field">
                                <FileBase64
                                    multiple={ true }
                                    onDone={ this.getFiles.bind(this) } />
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
                        <div className="eight wide field">
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
                            Update Trainer
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
        updateTrainer: (id, trainer) => dispatch(updateTrainer(id, trainer)),
        fetchData: (url) => dispatch(gymsFetchData(url)),
        fetchTrainersTags: (url) => dispatch(trainerTagsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrainerUpdate);
