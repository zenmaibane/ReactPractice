import { BrowserRouter, Route } from 'react-router-dom';
import * as React from 'react';
import Sakumamayu from './Sakumamayu';
import ToDoPage from './ToDoPage';
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
          <div className="ui text container">
            <Route exact={true} path="/" component={Home} />
            <Route path="/todo" component={ToDoPage} />
            <Route path="/sakumamayu" component={Sakumamayu} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
