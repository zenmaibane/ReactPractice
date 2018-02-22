import * as React from 'react';
import { NavLink } from 'react-router-dom';

class NavMenu extends React.Component {
    render() {
        return (
            <div className="ui secondary menu">
                <NavLink className="item" exact={true} activeClassName="active" to="/">Home</NavLink>
                <NavLink className="item" exact={true} activeClassName="active" to="/todo">ToDo</NavLink>
                <NavLink className="item" exact={true} activeClassName="active" to="/sakumamayu">Sakuma Mayu</NavLink>
            </div>
        );
    }
}

export default NavMenu;