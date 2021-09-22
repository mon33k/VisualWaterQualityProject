import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Main from './components/Main.js';

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <nav className='nav-bar'>
          <li><Link to="/">Home</Link></li>
          {"  "}
          <li><Link to="/water/searchBorough">Search Borough</Link></li>
          {"  "}
          <li><Link to="/water/timeLine">History Timeline</Link></li>
          {"  "}
          <li><Link to="/water/bookmark">Bookmark Info</Link></li>
          {"  "}
          <li><Link to="/water/resources">Resources</Link></li>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/water" component={Main} />
        </Switch>
      </div>
    );
  }
}

export default App;
