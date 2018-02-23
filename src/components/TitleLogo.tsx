import * as React from 'react';
import '../css/TitleLogo.css';
const logo = require('./logo.svg');

class TitleLogo extends React.Component {
    render() {
        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        );
    }
}
export default TitleLogo;