import React from "react";
import {connect} from "react-redux";
import {Modal} from "semantic-ui-react";
import {addTrainer} from "../../actions/trainers";
import {gymsFetchData} from "../../actions/page";


class TrainerEditForm extends React.Component {
    constructor(props) {
        super(props);

        // this.state = ({
        //     tag: "",
        //     tags: this.props.targetTrainer.tags,
        // });

        this.state = ({
            firstName: this.props.targetTrainer.firstName,
            lastName: this.props.targetTrainer.lastName,
            gender: this.props.targetTrainer.gender,
            profilePicture: this.props.targetTrainer.profilePicture,
            gyms: this.props.targetTrainer.gym,
            description: this.props.targetTrainer.description,
            email: this.props.targetTrainer.email,
            phone: this.props.targetTrainer.phone,
            joiningDate: new Date().toLocaleString(),
            tag: "",
            tags: this.props.targetTrainer.tags,
            cost: 0,
            overall_rate: null,
            comments: []
        });

        this.handleSubmit = this.handleSubmit.bind(this.state);

    }

    // componentDidMount() {
    //     // this.props.fetchData("/gyms/names");
    //     console.log("/gyms/names");
    //     // console.log( this.props.fetchData("/gyms/names"));
    // }

    getFiles = (pic) => {
        this.setState({profilePicture: pic[0].base64});
        console.log(this.state);
    };

    handleSubmit = (e) => {
        this.props.addTrainer(this.state);
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

    // addGymInTrainerForm = () => {
    //     this.state.gym
    // }

    renderTagsFromTrainer = () => {
        return this.props.targetTrainer.tags.map((tag) => {
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

    renderGyms = () => {
        return this.props.targetTrainer.gym.map((gym) => {
            return (
                <li className="mini ui button">
                    {/*// onClick={() => this.removeTag(gym)} */}
                    {gym}
                </li>
            )
        })
    };




render() {
    var genderIndex;

    if(this.props.targetTrainer.gender == "Male"){
        genderIndex = 0;
    }
    else if (this.props.targetTrainer.gender == "Female"){
        genderIndex = 1;
    }
    else {
        genderIndex = 2;
    }

    if (this.props.gymsList.length == 0){
        this.props.fetchData("http://localhost:9000/gyms")
    }
    var gymList = this.props.gymsList
    var gymNameList = gymList.map(function (el) { return el.name;});

    console.log("from Edit Form!!!!")
    console.log(gymList)
    console.log(gymNameList)

    return(
        <div>
            <form className="ui form">
                <h4 className="ui dividing header">Editing The Trainer Information</h4>
                <div className="field">
                    <label>Name</label>
                    <div className="fields">
                        <div className="three wide field">
                            <input
                                type="text"
                                placeholder={this.props.targetTrainer.firstName}
                                id="firstName"
                                required="required"
                                defaultValue ={this.props.targetTrainer.firstName}
                                onChange={(e) => {
                                    this.setState({firstName: e.target.value})
                                }}
                            />
                        </div>
                        <div className="three wide field">
                            <input
                                type="text"
                                placeholder="Last Name"
                                defaultValue ={this.props.targetTrainer.lastName}
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
                    <label>Description Of Yourself</label>
                    <div className="fields">
                        <div className="eight wide field">
                                <textarea
                                    row="3"
                                    type="text"
                                    id="description"
                                    placeholder="Description"
                                    defaultValue = {this.props.targetTrainer.description}
                                    required="required"
                                    onChange={(e) => {
                                        this.setState({profilePicture: e.target.value})
                                    }}
                                />
                        </div>
                    </div>
                </div>

                <div className="three wide field">
                    <label>Gender</label>
                    <select className="ui dropdown"
                            defaultValue = {genderIndex} >
                        <option value>Gender</option>
                        <option value={0}>Male</option>
                        <option value={1}>Female</option>
                        <option value={2}>Other</option>
                    </select>

                </div>

                <div className="field">
                    <label>Primary Gym</label>
                    <br/>
                    <br/>

                    <div className="four wide field">
                        <select className="ui dropdown" >
                            {
                                gymNameList.map((name) => {
                                    return (<option value> {name} </option>)
                                })
                            }
                        </select>
                        <button> add this gym </button>

                    </div>

                        <div className="field">
                            <ul>
                                {this.renderGyms()}
                            </ul>
                        </div>

                        <br/>

                </div>

                <div className="field">
                    <label>Contact Phone</label>
                    <div className="fields">
                        <div className="six wide field">
                            <input
                                type="text"
                                placeholder="Phone Number"
                                defaultValue = {this.props.targetTrainer.phone}
                                id="phone"
                                required="required"
                                onChange={(e) => {
                                    this.setState({phone: e.target.value})
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="field">
                    <label>Contact Email</label>

                    <div className="fields">
                        <div className="six wide field">
                            <input
                                type="text"
                                placeholder="Email"
                                defaultValue = {this.props.targetTrainer.email}
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
                            <input
                                type="text"
                                id="profilepicture"
                                placeholder="Profile Picture URL"
                                required="required"
                                onChange={(e) => {
                                    this.setState({profilePicture: e.target.value})
                                }}
                            />
                        </div>
                    </div>
                </div>


                <div className="field">
                    <label>Rate</label>
                    <div className="three wide field">
                        <div className="ui labeled input">
                            <label htmlFor="amount" className="ui label">$</label>
                            <input
                                type="text"
                                id="cost"
                                placeholder="Desired Price"
                                required="required"
                                defaultValue = {this.props.targetTrainer.cost}
                                onChange={(e) => {
                                    this.setState({cost: e.target.value})
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
                                onChange={(e) => {
                                    this.setState({tag: e.target.value});
                                }}
                            />
                            <button className="ui tag label" id="tagButton">
                                Add Tag
                            </button>
                        </div>
                    </div>
                    <div className="field">
                        <ul>
                            {this.renderTagsFromTrainer()}
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
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTrainer: (Trainer) => dispatch(addTrainer(Trainer)),
        fetchData: (url) => dispatch(gymsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrainerEditForm);