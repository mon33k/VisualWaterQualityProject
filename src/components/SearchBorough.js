import React, { Component } from "react";
// import NycMap from "./NycMap";
import waterAPI from "../api/waterAPI";
import values from "../geography/values.json";
import Alert from "react-bootstrap/Alert";
import "../stylesheets/searchBoroComponent.css";
import { Form, Col, Row, Button } from "react-bootstrap";

import InfoTable from "./InfoTable";

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

  // getSvgPathData () {
  //     waterAPI.getGeoData()
  //         .then(res => this.setState({geoData: res.json()}))
  //         .catch(err => console.log(err))
  // }

  handleInputChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleSubmitBorough(e) {
    this.props.getBoroughData(this.state.value);

    e.preventDefault();
  }

  componentDidMount() {
    // this.getSvgPathData()
    // waterAPI.getGeoData
    // .then(res =>{
    //     console.log("res.json()", res)
    //     this.setState({geoData: res})
    // })
    // .catch(err => console.log(err))
  }

  render() {
    console.log("right here", this.props.boroughData);

    return (
      <div>
        <Form onSubmit={this.handleSubmitBorough} id="boroughForm">
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
        {this.props.boroughData.length > 0 ? (
          <InfoTable data={this.props.boroughData} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

// {/* <NycMap geoData={values}/> */}
export default SearchBorough;
