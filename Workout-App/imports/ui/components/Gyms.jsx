import React from 'react';
import GymCard from './GymCard'
import GymMenu from './GymMenu'
import { connect } from 'react-redux'


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
        gymList: state.gymsReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gyms);