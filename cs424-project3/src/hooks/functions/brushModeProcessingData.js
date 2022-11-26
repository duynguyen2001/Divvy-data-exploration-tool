import raw from './divvy_dataset.json';
import { timeParse } from 'd3';
import { distBetween2Points, DIVVYBLUE, LYFTPINK } from '../../constant';
import L from 'leaflet';

export const processed = () => {
    const final = [];
    for (let ride of raw) {
      // console.log(ride)
        const newRide = {...ride};
        newRide["distance_metres"] = distBetween2Points(
            newRide.start_lat,
            newRide.start_lng,
            newRide.end_lat,
            newRide.end_lng
        );
        // console.log("here")
        if (isNaN(newRide.distance_metres)) {
            continue;
        }

        // console.log(newRide)
        const parseTime = timeParse("%Y-%m-%d %H:%M:%S");
        newRide["started_at"] = parseTime(ride.started_at);
        newRide["ended_at"] = parseTime(ride.ended_at);
        newRide["duration_seconds"] =
            (newRide.ended_at - newRide.started_at) / 1000;
        if (isNaN(newRide.duration_seconds)) {
            continue;
        }
        newRide["rideable_type"] = ride.rideable_type;
        newRide["member_type"] = ride.member_casual;
        final.push(newRide);
    }
    return final;
};
/**
 * Displays a subset of points in the data on the map
 * @param {Map} map leaflet map
 * @param {Array} data divvy data points
 * @param {Number} pointsToRender how many points to render, more = slower
 * @returns 
 */
export function addCircles({map, data, pointsToRender}) {
  for (let ride of data) {
      // var ride = data[i];
      var lat = ride.start_lat;
      var lon = ride.start_lng;
      var type = ride.rideable_type;
      // ref: https://www.igismap.com/leafletjs-point-polyline-polygon-rectangle-circle/
      var circleCentre = [lat, lon];
      var circleOptions = {
          color: (type === 'electric_bike') ? LYFTPINK : DIVVYBLUE,
          fillColor: (type === 'electric_bike') ? LYFTPINK : DIVVYBLUE,
          fillOpacity: 1
      }
    
      var circle = L.circle(circleCentre, 20, circleOptions);
      // circle.addTo(map);
      ride["map_circle"] = circle;
  }

  for (let i = 0; i < pointsToRender; i++) {
      data[i].map_circle.addTo(map);
  }
}

function updateCircles(data, brush) {
  console.log(data);
  for (let ride of data) {
      if (brush.contains(ride.map_circle.getLatLng())) {
          ride.map_circle.setStyle({
              color: (ride.rideable_type == 'electric_bike') ? LYFTPINK : DIVVYBLUE,
              fillColor: (ride.rideable_type == 'electric_bike') ? LYFTPINK : DIVVYBLUE,
              fillOpacity: 1
          });
      } else {
          ride.map_circle.setStyle({
              color: 'gray',
              fillColor: 'gray',
              fillOpacity: 1
          });
      }
  }
}
export default processed;
