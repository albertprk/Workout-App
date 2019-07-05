import React from 'react';
import GymForm from './gyms/GymForm'
import TrainerForm from './trainers/TrainerForm'

export default class Account extends React.Component {

    render() {
        return (
            <div>
                <GymForm/>
				  <h4 class="ui horizontal inverted divider"></h4>
				<TrainerForm/>
            </div>
        )
    }
}