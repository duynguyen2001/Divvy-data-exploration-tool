// import {createReadStream} from 'fs';
// const { parse } = require("csv-parse");
const processed = () => {
  // createReadStream("./divvy_dataset.csv")
  // .pipe(parse({ delimiter: ",", from_line: 2 }))
  // .on("data", function (row) {
  //   console.log(row);
  // })
  // .on("error", function (error) {
  //   console.log(error.message);
  // })
  // .on("end", function () {
  //   console.log("finished");
  // });

    // const final = [];
    // for (let ride of raw) {
    //     var newRide = {};
    //     newRide["start_lat"] = parseFloat(ride.start_lat);
    //     newRide["start_lng"] = parseFloat(ride.start_lng);
    //     newRide["end_lat"] = parseFloat(ride.end_lat);
    //     newRide["end_lng"] = parseFloat(ride.end_lng);
    //     newRide["distance_metres"] = distBetween2Points(
    //         newRide.start_lat,
    //         newRide.start_lng,
    //         newRide.end_lat,
    //         newRide.end_lng
    //     );
    //     if (isNaN(newRide.distance_metres)) {
    //         continue;
    //     }
    //     const parseTime = d3.timeParse("%Y-%m-%d %H:%M:%S");
    //     newRide["started_at"] = parseTime(ride.started_at);
    //     newRide["ended_at"] = parseTime(ride.ended_at);
    //     newRide["duration_seconds"] =
    //         (newRide.ended_at - newRide.started_at) / 1000;
    //     if (isNaN(newRide.duration_seconds)) {
    //         continue;
    //     }
    //     newRide["rideable_type"] = ride.rideable_type;
    //     newRide["member_type"] = ride.member_casual;
    //     final.push(newRide);
    // }
    // return final;
};

export default processed;
