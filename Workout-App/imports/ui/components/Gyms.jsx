import React from 'react';
import GymCard from './GymCard'
import GymMenu from './GymMenu'
import { connect } from 'react-redux'
import { addGym } from '../actions/page.js'


class Gyms extends React.Component {

    renderGyms() {
        console.log("render gyms");
        console.log(this.props.gymList);
        return this.props.gymList.map((gym) => {
            return (
                <GymCard gym={gym}/>
            )
        });
    };

    render() {
        return (
            <div>
                <button
                    className="ui button primary"
                    onClick={ () => this.props.addGym("dummy")}
                    align="left"
                >
                    Add Gym
                </button>
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
        gymList: state.manageGyms
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addGym: (gym) => dispatch(addGym(gym))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gyms);