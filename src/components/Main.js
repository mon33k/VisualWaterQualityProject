import React, { Component } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "../stylesheets/main.css";

import Bookmark from "./Bookmark";
import SearchBorough from "./SearchBorough";
import Resources from "./Resources";
import waterAPI from "../api/waterAPI";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      OpenDataInfo: [],
      singleBorough: "",
      boroughSelectedInfo: [],
    };
  }

  getBoroughData = (selectedBorough) => {
    this.setState({ singleBorough: selectedBorough });
  };

  componentDidMount() {
    Promise.resolve(waterAPI.grabAllData)
      .then((data) => {
        this.setState({
          OpenDataInfo: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  renderBookmarkInfo = () => {
    return <Bookmark render={this.addOpenDataInfo} />;
  };

  renderSearchBorough = () => {
    let boroughInformation = [];
    this.state.OpenDataInfo.forEach((e) => {
      if (this.state.singleBorough.toUpperCase() === e.borough.toUpperCase()) {
        boroughInformation.push(e);
      }
    });

    return (
      <SearchBorough
        getBoroughData={this.getBoroughData}
        boroughData={boroughInformation}
      />
    );
  };

  renderResources = () => {
    return <Resources />;
  };

  addOpenDataInfo = (info) => {
    const { OpenDataInfo } = this.state;
    this.setState({
      OpenDataInfo: [...OpenDataInfo, info],
    });
  };

  render() {
    return (
      <div className="main-body">
        <Routes>
          <Route
            path="/water/searchBorough"
            element={this.renderSearchBorough}
          />
          <Route path="/water/bookmark" element={this.renderBookmarkInfo} />
          <Route path="/water/resources" element={this.renderResources} />
        </Routes>
      </div>
    );
  }
}

export default Main;
