import { BrowserRouter, Route, Link } from 'react-router-dom';
import * as React from 'react';
import Sakumamayu from './Sakumamayu';
import ToDo from './ToDo';
import Home from './Home';
import '../css/App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/todo">ToDo</Link></li>
              <li><Link to="/sakumamayu">Sakuma Mayu</Link></li>
            </ul>
          </div>
          <div>
            <Route exact={true} path="/" component={Home} />
            <Route path="/todo" component={ToDo} />
            <Route path="/sakumamayu" component={Sakumamayu} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
