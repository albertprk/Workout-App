import React from 'react';
import './../../../client/main.css';
import AccountsUIWrapper from './AccountsUIWrapper';
import {NavLink} from 'react-router-dom'

class SideMenu extends React.Component {
    render() {
        return (
            <div className="__sidemenu">
                <div className="navigationMenu">
                    <NavLink className="navItem" to="/">Home</NavLink>
                    <NavLink className="navItem" to="/gyms">Gyms</NavLink>
                    <NavLink className="navItem" to="/trainers">Trainers</NavLink>
                    <NavLink className="navItem" to="/mytrainers">myTrainers</NavLink>
                    <NavLink className="navItem" to="/account">Account</NavLink>
                    <div className="navItem"> <AccountsUIWrapper/> </div>
                </div>
            </div>
        );
    }
}

export default SideMenu;
