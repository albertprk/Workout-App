import React from 'react';
import GymCard from './GymCard'
import GymMenu from './GymMenu'
import {connect} from 'react-redux'
import {gymsFetchData} from '../../actions/page'
import Spinner from '../Spinner'
import {gymSearchName} from "../../actions/gyms";
import {removeAllSortingTags, removeSortingTag} from "../../actions/sortingTags";

class Gyms extends React.Component {

    componentDidMount() {
        this.props.fetchData("https://swolrinfoapi.herokuapp.com/gymsAPI");
        this.props.removeAllSortingTags();
        this.props.gymSearchName("");
    }

    // renders list of gyms
    // filters by tags if tags present
    // only shows single gym if searching by name
    renderGyms() {
        return this.props.gymsList.map((gym) => {
            let contains = true;
            for (let i = 0; i < this.props.sortingTagsList.length; i++) {
                if (!gym.tags.includes(this.props.sortingTagsList[i])) {
                    contains = false
                }
            }
            if (this.props.gSearchName && this.props.gSearchName === gym.name
                || (!this.props.gSearchName && (this.props.sortingTagsList.length === 0 || contains))) {
                return (
                    <div>
                        <GymCard gym={gym}/>
                        <br/>
                    </div>
                );
            }
        });

    };

    renderTags = () => {
        return this.props.sortingTagsList.map((tag) => {
            return (
                <div
                    className="ui button"
                    onClick={() => {
                        this.props.removeSortingTag(tag)
                    }}
                >
                    {tag}
                </div>
            )
        });
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
                <GymMenu/>
                <br/>
                {this.renderTags()}
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
        gSearchName: state.gymSearchName,
        sortingTagsList: state.manageSortingTags
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(gymsFetchData(url)),
        gymSearchName: (name) => dispatch(gymSearchName(name)),
        removeSortingTag: (sortingTag) => dispatch(removeSortingTag(sortingTag)),
        removeAllSortingTags: () => dispatch(removeAllSortingTags())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gyms);
