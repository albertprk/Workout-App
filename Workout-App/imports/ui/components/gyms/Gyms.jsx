import React from 'react';
import GymCard from './GymCard'
import GymMenu from './GymMenu'
import { connect } from 'react-redux'
import { gymsFetchData } from'../../actions/page'
import Spinner from '../Spinner'

class Gyms extends React.Component {

    constructor() {
        super();
        this.state = ({ filterTags: ["dummy", "tags"] });
    }

    componentDidMount() {
        console.log("mounting");
        this.props.fetchData("http://localhost:9000/gyms");
        console.log("mounted");
        console.log(this.props);
    }


    renderGyms() {
        console.log("render gyms");
        console.log(this.props.gymsList);
        return this.props.gymsList.map((gym) => {
            return (
                <GymCard
                    parentCallBack = { this.getTagFromChild }
                    gym={gym}
                />
            )
        });
    };

    getTagFromChild = (tag) => {
        if (this.state.filterTags.indexOf(tag) == -1) {
            this.setState( { filterTags: [...this.state.filterTags, tag] });
        }
    };

    renderTags = () => {
        console.log("render tags");
        console.log(this.state.filterTags);
        return this.state.filterTags.map((tag) => {
            return (
                <div
                    className="ui button"
                    onClick={ () => this.removeTag(tag) }
                >
                    { tag }
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
                <p>Sorry! Error rendering</p>
            </div>
        }

        if (this.props.isLoading) {
            return <div align="center">
                <p>Loading...</p>
                <Spinner/>
            </div>
        }

        return (
            <div>
                { this.renderTags() }
                <GymMenu/>
                <ul>
                    { this.renderGyms() }
                </ul>
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    console.log("state.gymsReducer")
    console.log(state.gymsReducer)
    return {
        gymsList: state.gymsReducer,
        hasErrored: state.gymsErrored,
        isLoading: state.gymsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(gymsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gyms);