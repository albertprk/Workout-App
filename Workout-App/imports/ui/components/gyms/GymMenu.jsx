import React, {Component} from 'react';
import {connect} from 'react-redux'
import {gymSearchName} from '../../actions/gyms'
import {Icon} from 'semantic-ui-react'
import {gymTagsFetchData} from "../../actions/gymTags";


class GymMenu extends Component {
    constructor() {
        super();
        this.state = ({
            gymSearchName: "",
            tag: ""
        })
    }

    searchGymName = (e) => {
        e.preventDefault();
        this.props.gymSearchName(this.state.gymSearchName);
    };

    gymNames = () => {
        const gymList = this.props.gymsList;
        const gymNameList = gymList.map(function (el) {
            return el.name;
        });
        return gymNameList.map((gymName) => {
            return (<option> {gymName} </option>)
        });
    };

    clearSearch = (e) => {
        e.preventDefault();
        this.props.gymSearchName("");
        this.setState({ gymSearchName: "" })
    };

    gymTags = () => {
        if (this.props.gymTagsList.length === 0) {
            this.props.fetchGymsTags("http://localhost:9000/gyms/tags");
            // Hard Code Change later!
        }
        return this.props.gymTagsList.map((tag) => {
            return (<option> {tag} </option>)
        });
    };

    render() {
        return (
            <div className="__gym-menu-bar">
                <div className="ui pointing menu">
                    <a className="item">
                        Search
                    </a>
                    <div className="right menu">


                        <div className="item">
                            <form
                                className="ui transparent icon input"
                            >
                                <input
                                    type="text"
                                    placeholder="Search gyms by tags..."
                                    id="tagInput"
                                    name="tagInput"
                                    list="gymTags"
                                    value={this.state.tag}
                                    onChange={ (e) => {
                                        // tag input here
                                    }}
                                />
                                <datalist id="gymTags">
                                    {
                                        // this.gymTags()
                                    }
                                </datalist>
                                <Icon className="search icon" size='large'/>
                            </form>
                        </div>


                        <div className="item">
                            <form
                                className="ui transparent icon input"
                                onSubmit={this.searchGymName}
                            >
                                <input
                                    type="text"
                                    placeholder="Search gyms by name..."
                                    id="gymSearchName"
                                    name="gymSearchName"
                                    list="gymNames"
                                    value={this.state.gymSearchName}
                                    onChange={(e) => {
                                        this.setState({gymSearchName: e.target.value})
                                    }}
                                />
                                <datalist id="gymNames">
                                    {
                                        this.gymNames()
                                    }
                                </datalist>
                                <Icon className="search icon" size='large'/>
                            </form>
                        </div>

                        <div
                            className="item"
                            onClick={this.clearSearch}
                        >
                            <Icon className="times circle icon" size='large'/>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        gymsList: state.gymsReducer,
        tagsList: state.gymsTagsReducer,
        gymSearchName: state.gymSearchName
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        gymSearchName: (name) => dispatch(gymSearchName(name)),
        fetchGymsTags: (url) => dispatch(gymTagsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GymMenu);