import React from "react";
import Table from "react-bootstrap/Table";
import FilterBoroInfo from "./FilterBoroInfo";
import "./../stylesheets/infoTable.css";
import { Pagination, PageItem } from "react-bootstrap";

const InfoTable = ({ data }) => {
  console.log("data", data);
  let itemsDisplay = [];
  let items = [];
  let active = 1;

  // Function needs to cut data into an array of arrays of groups of 10 objs
  let tenPerPage = data.splice(0, 10);
  console.log("ten at a time", tenPerPage);

  for (let number = 1; number <= data.length; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} value={number}>
        {number}
      </Pagination.Item>
    );
  }

  const clickPageNum = (e) => {
    console.log("clicked this one ", e.target.text);
  };

  return (
    <div className="infoTable-container">
      {data.length > 0 ? <FilterBoroInfo dataToFilter={data} /> : ""}
      <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <thead>
              <tr className="searchBoroughInfo">
                <th>#</th>
                <th>Community Board</th>
                <th>Agency Name</th>
                <th>Complaint Type</th>
                <th>Descriptor</th>
                <th>Created Date</th>
                <th>Incident Zip</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {tenPerPage.map((e, i) => (
                <tr key={e.unique_key}>
                  <td>{i}</td>
                  <td>{e.community_board}</td>
                  <td>{e.agency_name}</td>
                  <td>{e.complaint_type}</td>
                  <td>{e.descriptor}</td>
                  <td>{e.created_date}</td>
                  <td>{e.incident_zip}</td>
                  <td>{e.status}</td>
                </tr>
              ))}
            </tbody>
          </tr>
        </thead>
      </Table>
      <Pagination onClick={clickPageNum}>{items}</Pagination>
    </div>
  );
};

export default InfoTable;
