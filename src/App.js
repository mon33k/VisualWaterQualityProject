import React, { Component } from "react";
import { Route, Switch, Link, NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./components/Home";
import Main from "./components/Main.js";

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">NYC Water Quality</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={NavLink} to="/water/searchBorough">
                Search Borough
              </Nav.Link>
              <Nav.Link as={NavLink} to="/water/timeLine">
                History Timeline
              </Nav.Link>
              <Nav.Link as={NavLink} to="/water/bookmark">
                Bookmark Info
              </Nav.Link>
              <Nav.Link as={NavLink} to="/water/resources">
                Resources
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/water" component={Main} />
        </Switch>
      </div>
    );
  }
}

export default App;
