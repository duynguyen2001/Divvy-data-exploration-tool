import { useD3 } from "../hooks/useD3";
import React from "react";
import * as d3 from "d3";

function LineChart({ data }) {
    const ref = useD3(
        (svg) => {
            const margin = { top: 70, right: 30, bottom: 50, left: 80 },
                width = 600 - margin.left - margin.right,
                height = 450 - margin.top - margin.bottom;

            const lineChart = svg
                .append("g")
                .attr(
                    "transform",
                    "translate(" + margin.left + "," + margin.top + ")"
                );
            // console.log(countsByTime(raw).map(d => d.hour))
            //Read the data
            let x = d3
                .scaleLinear()
                .domain(d3.extent(countsByTime(data).map((d) => d.hour)))
                .range([0, width]);
            let xAxis = lineChart
                .append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x).ticks(24));

            // Add Y axis
            let y = d3
                .scaleLinear()
                .domain([0, d3.max(countsByTime(data).map((d) => d.rides))])
                .range([height, 0]);
            let yAxisGroup = lineChart.append("g");
            let yAxis = yAxisGroup.call(d3.axisLeft(y));

            // Add the line

            let path = lineChart.append("path");
            path.datum(countsByTime(data))
                .attr("fill", "none")
                .attr("stroke", "steelblue")
                .attr("stroke-width", 1.5)
                .attr(
                    "d",
                    d3
                        .line()
                        .x(function (d) {
                            return x(d.hour);
                        })
                        .y(function (d) {
                            return y(d.rides);
                        })
                );

            function update(data) {
                // update x axis
                const t = svg.transition().ease(d3.easeLinear).duration(200);

                y = d3
                    .scaleLinear()
                    .domain([0, d3.max(countsByTime(data).map((d) => d.rides))])
                    .range([height, 0]);

                yAxis = yAxisGroup.transition(t).call(d3.axisLeft(y));

                // draw bars
                path.datum(countsByTime(data))
                    .attr("fill", "none")
                    .attr("stroke", "steelblue")
                    .attr("stroke-width", 1.5)
                    .attr(
                        "d",
                        d3
                            .line()
                            .x(function (d) {
                                return x(d.hour);
                            })
                            .y(function (d) {
                                return y(d.rides);
                            })
                    );
            }

            // Title
            svg.append("text")
                .attr("x", width / 2 - 100)
                .attr("y", margin.top / 3)
                .attr("fill", "black")
                .attr("font-size", 30)
                .attr("dominant-baseline", "middle")
                .text("Divvy Ridership per Hour");
            // xlabel
            svg.append("text")
                .attr("x", width / 2 - 20 + margin.left)
                .attr("y", height + margin.top + 35)
                .attr("fill", "black")
                .attr("font-size", 15)
                .attr("dominant-baseline", "middle")
                .text("hour of day");

            return Object.assign(svg.node(), { update });
        },
        [data.length]
    );

    return (
        <svg
            ref={ref}
            style={{
                height: 500,
                width: "100%",
                marginRight: "0px",
                marginLeft: "0px",
            }}
        >
            <g className="plot-area" />
            <g className="x-axis" />
            <g className="y-axis" />
        </svg>
    );
}

const countsByTime = (data) => {
    const counts = {};

    for (let ride of data) {
        // const time = ride.started_at.getHours();
        const time = new Date(ride.started_at).getHours() 

        if (!(time in counts)) {
            counts[time] = 1;
        } else {
            counts[time] += 1;
        }
    }

    const arr = [];
    for (var key in counts) {
        if (counts.hasOwnProperty(key)) {
            arr.push({ hour: parseInt(key), rides: counts[key] });
        }
    }

    return arr;
};
export default LineChart;
