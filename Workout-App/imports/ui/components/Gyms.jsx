import React from 'react';
import GymCard from './GymCard'
import GymMenu from './GymMenu'
import { connect } from 'react-redux'
import { gymsFetchData } from'../actions/page'

class Gyms extends React.Component {

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
                <GymCard gym={gym}/>
            )
        });
    };

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! Error rendering</p>
        }

        if (this.props.isLoading) {
            return <div align="center">
                <p>Loading...</p>
            </div>
        }

        return (
            <div>
                <GymMenu/>
                <ul>
                    { this.renderGyms() }
                </ul>
            </div>
        )
    };
}

const mapStateToProps = (state) => {
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