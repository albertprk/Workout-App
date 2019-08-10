import React, {Component} from 'react';
import {connect} from 'react-redux'
import {gymSearchName} from '../../actions/gyms'
import {Icon} from 'semantic-ui-react'
import {gymTagsFetchData} from "../../actions/gymTags";
import {addSortingTag, removeAllSortingTags} from "../../actions/sortingTags";


class GymMenu extends Component {
    constructor() {
        super();
        this.state = ({
            gymSearchName: "",
            tag: ""
        })
    }

    addSortingTag = (e) => {
        e.preventDefault();
        if (this.props.gSearchName) this.props.gymSearchName("");
        this.props.addSortingTag(this.state.tag);
        this.setState({tag: ""})
    };

    searchGymName = (e) => {
        e.preventDefault();
        if (this.props.tagsList.length) this.props.removeAllSortingTags();
        this.props.gymSearchName(this.state.gymSearchName);
        this.setState({gymSearchName: ""})
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
        this.props.removeAllSortingTags();
        this.setState({
            gymSearchName: "",
            tag: ""
        })
    };

    gymTags = () => {
        if (this.props.tagsList.length === 0) {
            this.props.fetchGymsTags("https://swolrinfoapi.herokuapp.com/gymsAPI/tags");
            // Hard Code Change later!
        }
        return this.props.tagsList.map((tag) => {
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
                                onSubmit={this.addSortingTag}
                            >
                                <input
                                    type="text"
                                    placeholder="Search gyms by tags..."
                                    id="tagInput"
                                    name="tagInput"
                                    list="gymTags"
                                    value={this.state.tag}
                                    onChange={(e) => {
                                        this.setState({tag: e.target.value})
                                    }}
                                />
                                <datalist id="gymTags">
                                    {
                                        this.gymTags()
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
        gSearchName: state.gymSearchName,
        sortingTagsList: state.manageSortingTags
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        gymSearchName: (name) => dispatch(gymSearchName(name)),
        fetchGymsTags: (url) => dispatch(gymTagsFetchData(url)),
        addSortingTag: (sortingTag) => dispatch(addSortingTag(sortingTag)),
        removeAllSortingTags: () => dispatch(removeAllSortingTags())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GymMenu);
