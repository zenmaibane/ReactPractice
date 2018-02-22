import * as React from 'react';
import { Link } from 'react-router-dom';

class NavMenu extends React.Component {
    render() {
        return (
            <div className="ui secondary menu">
                <Link className="active item" to="/">Home</Link>
                <Link className="item" to="/todo">ToDo</Link>
                <Link className="item" to="/sakumamayu">Sakuma Mayu</Link>
            </div>
        );
    }
}

export default NavMenu;