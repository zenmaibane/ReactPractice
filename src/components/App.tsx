import { BrowserRouter, Route } from 'react-router-dom';
import * as React from 'react';
import Sakumamayu from './Sakumamayu';
import ToDo from './ToDo';
import Home from './Home';
import NavMenu from './NavMenu';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <NavMenu />
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
