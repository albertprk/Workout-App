import React, {Component} from 'react';
import SideMenu from './SideMenu';
import Header from './Header';

import {BrowserRouter, Route} from 'react-router-dom'
import Home from "./Home";
import Gyms from "./gyms/Gyms";
import TrainerCards from './trainers/TrainerCards';
import TrainerInfo from './trainers/TrainerInfo';
import Account from './Account'
import TrainerForm from './trainers/TrainerForm'
import TrainerUpdate from './trainers/TrainerUpdate'
import GymForm from './gyms/GymForm'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {apiResponse: ""};
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({apiResponse: res}));
    }

    componentWillMount() {
        this.callAPI();
    }

    render() {
        return (
            <div>
                <Header/>
                <br/>
                <BrowserRouter>
                    <SideMenu/>
                    <Route exact path='/' component={Home}/>

                    <div className="ui grid">
                        <div className="eighteen wide stretched column">
                            <div className="ui segment">
                                <Route path='/gyms' component={Gyms}/>
                                <Route path='/trainers' component={TrainerCards}/>
                                <Route path='/mytrainers' component={TrainerInfo}/>
                                <Route path='/account' component={Account}/>
                                <Route path='/account/addgym' component={GymForm}/>
                                <Route path='/account/addtrainer' component={TrainerForm}/>
                                <Route path='/account/modifytrainer' component={TrainerUpdate}/>
                            </div>
                        </div>
                    </div>

                </BrowserRouter>
            </div>
        );
    }
}

export default App;
