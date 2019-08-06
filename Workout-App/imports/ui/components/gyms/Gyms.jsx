import React from 'react';
import GymCard from './GymCard'
import GymMenu from './GymMenu'
import {connect} from 'react-redux'
import {gymsFetchData} from '../../actions/page'
import Spinner from '../Spinner'
import {gymSearchName} from "../../actions/gyms";

class Gyms extends React.Component {

    constructor() {
        super();
        this.state = ({filterTags: []});
    }

    componentDidMount() {
        this.props.fetchData("http://localhost:9000/gyms");
        this.props.gymSearchName("");
    }

    // renders list of gyms
    // filters by tags if tags present
    // only shows single gym if searching by name
    renderGyms() {
        return this.props.gymsList.map((gym) => {
            let contains = true;
            for (let i = 0; i < this.state.filterTags.length; i++) {
                if (!gym.tags.includes(this.state.filterTags[i])) {
                    contains = false
                }
            }
            if (this.props.gSearchName && this.props.gSearchName === gym.name
                || (!this.props.gSearchName && (this.state.filterTags.length === 0 || contains))) {
                return (
                    <GymCard
                        parentCallBack={this.getTagFromChild}
                        gym={gym}
                    />
                )
                    ;
            }
        });

    };

    getTagFromChild = (tag) => {
        if (this.state.filterTags.indexOf(tag) === -1) {
            this.setState({filterTags: [...this.state.filterTags, tag]});
        }
    };

    renderTags = () => {
        return this.state.filterTags.map((tag) => {
            return (
                <div
                    className="ui button"
                    onClick={() => this.removeTag(tag)}
                >
                    {tag}
                </div>
            )
        });
    };

    removeTag = (tagToRemove) => {
        this.setState({
            filterTags: this.state.filterTags.filter((tag) => tag !== tagToRemove)
        })
    };

    render() {

        if (this.props.hasErrored) {
            return <div>
                <GymMenu/>
                <br/>
                <p>Sorry! Error rendering</p>
            </div>
        }

        if (this.props.isLoading) {
            return <div align="center">
                <GymMenu/>
                <br/>
                <p>Loading...</p>
                <Spinner/>
            </div>
        }

        return (
            <div>
                {this.renderTags()}
                <GymMenu/>
                <br/>
                <ul>
                    {this.renderGyms()}
                </ul>
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        gymsList: state.gymsReducer,
        hasErrored: state.gymsErrored,
        isLoading: state.gymsLoading,
        gSearchName: state.gymSearchName
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(gymsFetchData(url)),
        gymSearchName: (name) => dispatch(gymSearchName(name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gyms);