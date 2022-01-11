import React from "react";
import Table from "react-bootstrap/Table";
import FilterBoroInfo from "./FilterBoroInfo";
import "./../stylesheets/infoTable.css";

const InfoTable = ({ data }) => {
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
              {data.map((e, i) => (
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
    </div>
  );
};

export default InfoTable;
