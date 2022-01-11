import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import "./../stylesheets/filterBoroInfo.css";

const FilterBoroInfo = () => {
  return (
    <div className="filterBoro-container">
      <Form>
        <Row>
          <Col xs="auto">
            <Form.Label as="legend">Community Board</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select Community Board</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Col xs="auto">
            <Form.Label as="legend">Enter Zip Code:</Form.Label>
            <Form.Control
              type="text"
              id="zipcode-search"
              placeholder="Search by zip code"
            />
            <Form.Text id="zipcode-search" />
          </Col>
          <Col xs="auto">
            <Form.Label as="legend">Status</Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="Open"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="Closed"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
            </Col>
          </Col>
        </Row>
        <Row>
          <Col sm={14}>
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FilterBoroInfo;
