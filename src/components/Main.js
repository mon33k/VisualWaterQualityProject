import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import "../stylesheets/main.css";

import Bookmark from "./Bookmark";
import SearchBorough from "./SearchBorough";
import Resources from "./Resources";
import waterAPI from "../api/waterAPI";
const locationInfo = require("../api/samplesites.json");

const utmObj = require("utm-latlng");
const utm = new utmObj();

// const opencage = require("opencage-api-client");

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

  findCoordsInSelectedBorough = (arrBoroughLatLng) => {
    let { boroughSelectedInfo } = this.state;
    console.log("arrBoroughLatLng", arrBoroughLatLng);
    // 40.6910517°, -064.3022555°
    // arrBoroughLatLng.forEach(e => {
    //     let url =
    //       `https://api.opencagedata.com/geocode/v1/json?q=${e.lat}%2C+${e.lng}&key=${process.env.REACT_APP_OPENCAGE_API}&pretty=1`;

    //     fetch(url)
    //       .then((res) => res.json())
    //       .then((res) => console.log("results", res))
    //       .catch((err) => console.log("err", err));

    //   })

   
    // let temp = [];
    // arrBoroughLatLng.forEach((e) => {
    //   console.log(e.location);
    //   opencage
    //     .geocode({
    //       q: `${e.location}`,
    //       key: `${process.env.REACT_APP_OPENCAGE_API}`,
    //     })
    //     .then((data) => {
    //       temp += data;
    //     })
    //     .catch((error) => {
    //       console.log("error", error.message);
    //     });
    // });

    // //console.log("arrBoroughLatLng", arrBoroughLatLng);
    // console.log("temp", temp);
  };

  getSelectedBoroughInfo = () => {
    let allBoroughLocations = [];
    this.state.OpenDataInfo.forEach((e) => {
      //Sample site data
      locationInfo["SP2020-w-XY-coordinates"].filter((j) => {
        if (j["Sample Site"] === e.sample_site) {
          // let convertedValue = utm.convertUtmToLatLng(
          //   j["X - Coordinate"],
          //   j["Y - Coordinate"],
          //   3101,
          //   "NY"
          // );

          let convertedValue = {
            lat: j["X - Coordinate"],
            lng: j["Y - Coordinate"],
            site: j["Sample Site"],
            location: j["Sample Station (SS) - Location Description"],
          };
          allBoroughLocations.push(convertedValue);
        }
      });
    });

    this.findCoordsInSelectedBorough(allBoroughLocations);

    // this.findCoordsInSelectedBorough(
    //   allBoroughLocations.lat,
    //   allBoroughLocations.lng
    // );
  };

  componentDidMount() {
    Promise.resolve(waterAPI.grabAllData)
      .then((data) => {
        // console.log("new data --> ", data);
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
    this.getSelectedBoroughInfo();

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
    console.log(
      "this.state.boroughSelectedInfo",
      this.state.boroughSelectedInfo
    );
    return (
      <div className="main-body">
        <Switch>
          <Route
            path="/water/searchBorough"
            render={this.renderSearchBorough}
          />
          <Route path="/water/bookmark" render={this.renderBookmarkInfo} />
          <Route path="/water/resources" render={this.renderResources} />
        </Switch>
      </div>
    );
  }
}

export default Main;
