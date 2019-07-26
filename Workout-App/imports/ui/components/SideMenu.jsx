import React from 'react';
import './../../../client/main.css';
import AccountsUIWrapper from './AccountsUIWrapper';
import {NavLink} from 'react-router-dom'

class SideMenu extends React.Component {
    render() {
        return (
            <div className="__sidemenu">
                <div className="navigationMenu">
                    <div className="navItem">
                        <NavLink to="/home">Home</NavLink>
                    </div>
                    <div className="navItem">
                        <NavLink to="/gyms">Gyms</NavLink>
                    </div>
                    <div className="navItem">
                        <NavLink to="/trainers">Trainers</NavLink>
                    </div>
                    <div className="navItem">
                        <NavLink to="/mytrainers">myTrainers</NavLink>
                    </div>
                    <div className="navItem">
                        <NavLink to="/account">Account</NavLink>
                    </div>
                    <div className="navItem">
                        <AccountsUIWrapper/>
                    </div>
                </div>


            </div>
        );
    }
}

export default SideMenu
