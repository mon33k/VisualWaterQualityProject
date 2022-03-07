import React, { Component } from "react";
import waterAPI from "../api/waterAPI";
// import XLSX from "xlsx";
import Alert from "react-bootstrap/Alert";
import "../stylesheets/searchBoroComponent.css";
import { Form, Col, Row, Button } from "react-bootstrap";

import InfoTable from "./InfoTable";
import NycMap from "./NycMap";

const locationInfo = require("../api/samplesites.json");

class SearchBorough extends Component {
  constructor() {
    super();
    this.state = {
      value: "Manhattan",
      geoData: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitBorough = this.handleSubmitBorough.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleSubmitBorough(e) {
    this.props.getBoroughData(this.state.value);

    e.preventDefault();
  }

  getSampleSiteLocations = () => {};

  render() {
    console.log("right here", this.props.boroughData);
    // console.log("json info hereee ", locationInfo);

    return (
      <div className="searchborough-container">
        <Form onSubmit={this.handleSubmitBorough} className="borough-form">
          <Form.Select
            value={this.state.value}
            onChange={this.handleInputChange}
            form="boroughForm"
          >
            <option key="manh" value="Manhattan">
              Manhattan
            </option>
            <option key="bx" value="Bronx">
              Bronx
            </option>
            <option key="qns" value="Queens">
              Queens
            </option>
            <option key="bk" value="Brooklyn">
              Brooklyn
            </option>
            <option key="si" value="Staten Island">
              Staten Island
            </option>
          </Form.Select>
          <Button type="submit" value="Submit">
            Submit
          </Button>
        </Form>
        <NycMap
          data={this.props.boroughData}
          setBorough={this.handleSubmitBorough}
        />

        {this.props.boroughData.length > 0 ? (
          <InfoTable data={this.props.boroughData} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default SearchBorough;
