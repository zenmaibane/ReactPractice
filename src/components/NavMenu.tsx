import * as React from 'react';
import { NavLink } from 'react-router-dom';
import TitleLogo from './TitleLogo';

class NavMenu extends React.Component {
    render() {
        return (
            <nav className="ui secondary menu">
                <TitleLogo />
                <NavLink className="item" exact={true} activeClassName="active" to="/">Home</NavLink>
                <NavLink className="item" exact={true} activeClassName="active" to="/todo">ToDo</NavLink>
                <NavLink className="item" exact={true} activeClassName="active" to="/sakumamayu">Sakuma Mayu</NavLink>
            </nav>
        );
    }
}

export default NavMenu;