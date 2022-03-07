import React, { Component } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import Home from "./components/Home";
import Main from "./components/Main.js";
require("dotenv").config();

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="/">NYC Water Quality</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/water/searchBorough">
                Search Borough
              </Link>
              <Link className="nav-link" to="/water/bookmark">
                Bookmark Info
              </Link>
              <Link className="nav-link" to="/water/resources">
                Resources
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/water" element={<Main />} />
        </Routes>
      </div>
    );
  }
}

export default App;
