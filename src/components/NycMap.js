import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import * as d3Geo from "d3-geo";
import nycJson from "../geography/values.json";
import "../stylesheets/nycMap.css";

const NycMap = ({ setBorough, data }) => {
  const geoRef = React.useRef();
  const width = 960;
  const height = 500;

  // const [x, setX] = useState("450");
  // const [y, setY] = useState("350");

  const svg = d3.select(geoRef.current); //d3.select("#geo");

  var projection = d3
    .geoMercator()
    .scale(45000)
    // Center the Map in Colombia
    .center([-73.935242, 40.73061])
    .translate([width / 2, height / 2]);

  console.log("nycJson", nycJson);

  console.log("projection ", projection);

  let path = d3.geoPath().projection(projection);

  svg
    .attr("width", width)
    .attr("height", height)
    .selectAll("path")
    .data(nycJson.features)
    .enter()
    .append("path")
    .attr("d", path)
    .style("fill", "#207582")
    .style("stroke", "#155A64")
    .on("mouseover", (e, d) => {
      mouseMoveEvent(e, d);
    })
    .on("mouseout", (e, d) => {
      mouseOutEvent(e, d);
    })
    .on("mousedown", (e, d) => {
      mouseDownEvent(e, d);
    });

  const toolTip = d3
    .select("body")
    .append("div")
    .attr("class", "tool-tip")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("padding", "5px")
    .style("visibility", "hidden")
    .style("background", "transparent")
    .style("color", "white")
    .style("font-size", "20px")
    .text("a simple tooltip");

  const mouseMoveEvent = (e, d) => {
    // console.log("event here ", e.target);
    console.log("d", d);
    toolTip
      .style("visibility", "visible")
      .style("top", e.pageY + "px")
      .style("left", e.pageX + "px")
      .text(`${d.properties.boro_name}`);

    d3.select(e.target).style("fill", "orange");
  };

  const mouseOutEvent = (e, d) => {
    d3.select(e.target).style("fill", "#207582");
    toolTip.style("visibility", "hidden");
  };

  const mouseDownEvent = (e, d) => {
    console.log("okurrr", d.properties.boro_name);
    setBorough(d.properties.boro_name);
    //d3.select(e.target)
  };

  return (
    <>
      <svg ref={geoRef} className="nyc-svg" />
    </>
  );
};

export default NycMap;
