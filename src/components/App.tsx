import { BrowserRouter, Route } from 'react-router-dom';
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
          <Route path="/" component={Home} />
          <Route path="/sakumamayu" component={Sakumamayu} />
          <Route path="/todo" component={ToDo} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
