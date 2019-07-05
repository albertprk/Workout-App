import React from 'react';
import update from 'react-addons-update'
import { connect } from 'react-redux'
import { addTrainer } from '../../actions/trainers'

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
			joiningDate: "",
			tag: "",
			tags: [],
			cost: 0,
			overall_rate: null,
			comments: []
		});

		this.handleSubmit = this.handleSubmit.bind(this.state);
	}

	handleSubmit = (e) => {
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth() + 1;
		var yyyy = today.getFullYear();
		today = dd + '/' + mm + '/' + yyyy;
		this.setState({joiningDate: today})
		console.log(today)
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

	gettodaydate = () => {
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth() + 1;
		var yyyy = today.getFullYear();
		today = dd + '/' + mm + '/' + yyyy;
	}

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


	render() {
        return (
            <div>
                <form
                    className="ui form"
                >
                    <h4 className="ui dividing header">Signup as a Trainer</h4>
                    <div className="field">
                        <label>Name</label>
                        <div className="fields">
                            <div className="five wide field">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    id="firstName"
                                    required="required"
                                    onChange={ (e) => { this.setState( {firstName: e.target.value })}}
                                />
                            </div>
                            <div className="five wide field">
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    id="lastName"
                                    required="required"
                                    onChange={ (e) => { this.setState( {lastName: e.target.value })}}
                                />
                            </div>
                        </div>
                    </div>

					<div className="field">
                        <label>Gender</label>
                        <div className="fields">
                            <div className="five wide field">
                                <input
                                    type="text"
                                    id="gender"
                                    placeholder="Male/Female/Other"
                                    required="required"
                                    onChange={ (e) => { this.setState( { gender: e.target.value } ) }}
                                />
                            </div>
                        </div>
                    </div>

					<div className="field">
                        <label>Primany Gym</label>
                        <div className="fields">
                            <div className="eight wide field">
                                <input
                                    type="text"
                                    id="gym"
                                    placeholder="Gym Name"
                                    required="required"
                                    onChange={ (e) => { this.setState( { gym: e.target.value } ) }}
                                />
                            </div>
                        </div>
                    </div>

					<div className="field">
                        <label>Contact Information</label>
                        <div className="fields">
                            <div className="six wide field">
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    id="phone"
                                    required="required"
                                    onChange={ (e) => { this.setState( {phone: e.target.value })}}
                                />
                            </div>
                            <div className="six wide field">
                                <input
                                    type="text"
                                    placeholder="Email"
                                    id="email"
                                    required="required"
                                    onChange={ (e) => { this.setState( {email: e.target.value })}}
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
                                    onChange={ (e) => { this.setState( { profilePicture: e.target.value } ) }}
                                />
                            </div>
                        </div>
                    </div>



					<div className="field">
                        <label>Rate</label>
                        <div className="three wide field">
							<div class="ui labeled input">
								<label for="amount" class="ui label">$</label>
								<input
                                    type="text"
                                    id="cost"
                                    placeholder="Desired Rate"
                                    required="required"
                                    onChange={ (e) => { this.setState( { cost: e.target.value } ) }}
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
                                    placeholder="Profile Picture URL"
                                    required="required"
                                    onChange={ (e) => { this.setState( { profilePicture: e.target.value } ) }}
                                />
                            </div>
                        </div>
                    </div>

                    <form
                        className="ui form"
                        onSubmit={ this.addTag }
                    >
                        <h4 className="ui dividing header">Tags</h4>
                        <div className="field">
                            <div className="ui right labeled left icon input">
                                <i className="tags icon"></i>
                                <input
                                    type="text"
                                    placeholder="Enter tags"
                                    id="tagInput"
                                    value={ this.state.tag }
                                    required="required"
                                    onChange={ (e) => {
                                        this.setState( {tag: e.target.value} );
                                    } }
                                />
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
                                { this.renderTags() }
                            </ul>
                        </div>
                    </form>


					<div className="field">
                        <button
                            className="ui button primary"
                            id="addTrainer"
                            onClick={ this.handleSubmit }
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
    return{  }
};

const mapDispatchToProps = (dispatch) => {
    return{
        addTrainer:(Trainer) => dispatch(addTrainer(Trainer))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrainerForm);
