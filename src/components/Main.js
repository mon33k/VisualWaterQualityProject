import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import "../stylesheets/main.css";

import Bookmark from "./Bookmark";
import HistoryTimeline from "./HistoryTimeline";
import SearchBorough from "./SearchBorough";
import Resources from "./Resources";
import waterAPI from "../api/waterAPI";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      savedInfo: [],
      singleBorough: "",
    };
  }

  getBoroughData = (selectedBorough) => {
    this.setState({ singleBorough: selectedBorough });
  };

  componentDidMount() {
    Promise.resolve(waterAPI.grabAllData)
      .then((data) => {
        this.setState({
          savedInfo: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  renderBookmarkInfo = () => {
    return <Bookmark render={this.addSavedInfo} />;
  };

  renderHistoryTimeline = () => {
    return <HistoryTimeline />;
  };

  renderSearchBorough = () => {
    let boroughInformation = [];
    if (this.state.singleBorough) {
      this.state.savedInfo.forEach((e) => {
        if (
          e.borough.toLowerCase() === this.state.singleBorough.toLowerCase()
        ) {
          boroughInformation = [...boroughInformation, e];
        }
      });
    }

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

  addSavedInfo = (info) => {
    const { savedInfo } = this.state;
    this.setState({
      savedInfo: [...savedInfo, info],
    });
  };

  render() {
    // console.log("this.state water", this.state.savedInfo)
    console.log("main", this.state.singleBorough);
    return (
      <div className="main-body">
        <Switch>
          <Route
            path="/water/searchBorough"
            render={this.renderSearchBorough}
          />
          <Route path="/water/timeLine" render={this.renderHistoryTimeline} />
          <Route path="/water/bookmark" render={this.renderBookmarkInfo} />
          <Route path="/water/resources" render={this.renderResources} />
        </Switch>
      </div>
    );
  }
}

export default Main;
