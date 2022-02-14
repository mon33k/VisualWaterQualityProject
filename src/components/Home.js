import React, { Component } from "react";

const Home = () => {
  return (
    <div className="home-container">
      <h1>NYC Drinking Water Quality Data</h1>
      <p>
        I created this project using NYC Open Data{" "}
        <a href="https://data.cityofnewyork.us/Environment/Drinking-Water-Quality-Distribution-Monitoring-Dat/bkwf-xfky/data">
          Drinking Water Quality Distribution Monitoring Data
        </a>{" "}
        <br />
        using D3 and React I create an interactive map to display data on each
        borough's water quality.
      </p>
    </div>
  );
};

export default Home;
