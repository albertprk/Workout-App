import React from 'react';
import './../../../client/main.css';
import {NavLink} from 'react-router-dom'

class AccountMenu extends React.Component {
    render() {
        return (
            <div className="__Accountmenu">
                <div className="navigationMenu">
                    <NavLink className="navItem" to="/account/addgym">Add Gym</NavLink>
                    <NavLink className="navItem" to="/account/addtrainer">Sign Up as a Trainer</NavLink>
                    <NavLink className="navItem" to="/account/modifytrainer">Modify Trainer Informations</NavLink>
                </div>
            </div>
        );
    }
}

export default AccountMenu;
