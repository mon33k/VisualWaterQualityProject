import React from "react"
import * as d3 from "d3";
import * as d3Geo from "d3-geo";
import waterAPI from '../api/waterAPI';

const width = 400;
const height = 600;

const long = 20.2597;
const lat = 63.8284;
const svg = d3.select("#geo");


const NycMap = ({geoData}) => {

    console.log("inside of the map component ", geoData)
    var projection = d3Geo
            .geoMercator()
            .fitExtent([[20, 20], [width, height]], geoData);
        console.log(projection);

        var path = d3Geo.geoPath().projection(projection);

        // Draw each province as a path
        svg
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .selectAll("path")
            .data(geoData.features)
            .enter()
            .append("path")
            .attr("d", path)
            // Styling
            .style("fill", "white")
            .style("stroke", "#ccc");

        const coordinates = projection([long, lat]);
        console.log(coordinates);
    


    

    return (
        <div>
            Mapa map a map{svg}
            <svg id="geo"></svg>
        </div>
    )

}

export default NycMap


/**
 getGeoData().then(geo => {
        var projection = d3Geo
            .geoMercator()
            .fitExtent([[20, 20], [width, height]], geo);
        console.log(projection);

        var path = d3Geo.geoPath().projection(projection);

        // Draw each province as a path
        svg
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .selectAll("path")
            .data(geo.features)
            .enter()
            .append("path")
            .attr("d", path)
            // Styling
            .style("fill", "white")
            .style("stroke", "#ccc");

        const coordinates = projection([long, lat]);
        console.log(coordinates);

        // Project points on the map by longtitude/latitude
        let points = [];
        points.push(projection([18.0686, 59.3293]));
        points.push(projection([13.003822, 55.60498]));
        points.forEach(point => {
            svg
                .append("circle")
                .attr("cx", point[0])
                .attr("cy", point[1])
                .attr("r", 3)
                .style("fill", "red");
        });
    });

 */