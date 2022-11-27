import raw from "./divvy_dataset.json";
import * as d3 from "d3";
import { distBetween2Points, DIVVYBLUE, LYFTPINK } from "../../constant";
import L from "leaflet";
import * as LeafletDraw from "leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";
import { MapContainer } from "react-leaflet";

export const brushModeProcessedData = () => {
    const final = [];
    for (let ride of raw) {
        // console.log(ride)
        const newRide = { ...ride };
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
        const parseTime = d3.timeParse("%Y-%m-%d %H:%M:%S");
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
export function addCircles(data, pointsToRender, map) {
    const circles = [];
    var i = 0;
    console.log(map);
    for (let ride of data) {
        if (i++ >= pointsToRender) {
            break;
        }
        // var ride = data[i];
        var lat = ride.start_lat;
        var lon = ride.start_lng;
        var type = ride.rideable_type;
        // ref: https://www.igismap.com/leafletjs-point-polyline-polygon-rectangle-circle/
        var circleCentre = [lat, lon];
        var circleOptions = {
            color: type === "electric_bike" ? LYFTPINK : DIVVYBLUE,
            fillColor: type === "electric_bike" ? LYFTPINK : DIVVYBLUE,
            fillOpacity: 1,
        };

        var circle = L.circle(circleCentre, 20, circleOptions);
        circle.addTo(map);
        circles.push(circle);
    }
    return circles;
}

function updateCircles(data, brush) {
    console.log(data);
    for (let ride of data) {
        if (brush.contains(ride.map_circle.getLatLng())) {
            ride.map_circle.setStyle({
                color:
                    ride.rideable_type === "electric_bike"
                        ? LYFTPINK
                        : DIVVYBLUE,
                fillColor:
                    ride.rideable_type === "electric_bike"
                        ? LYFTPINK
                        : DIVVYBLUE,
                fillOpacity: 1,
            });
        } else {
            ride.map_circle.setStyle({
                color: "gray",
                fillColor: "gray",
                fillOpacity: 1,
            });
        }
    }
}
export function isMarkerInsidePolygon(marker, poly) {
    // ref: https://stackoverflow.com/questions/31790344/determine-if-a-point-reside-inside-a-leaflet-polygon
    var inside = false;
    var x = marker.getLatLng().lat,
        y = marker.getLatLng().lng;
    for (var ii = 0; ii < poly.getLatLngs().length; ii++) {
        var polyPoints = poly.getLatLngs()[ii];
        for (
            var i = 0, j = polyPoints.length - 1;
            i < polyPoints.length;
            j = i++
        ) {
            var xi = polyPoints[i].lat,
                yi = polyPoints[i].lng;
            var xj = polyPoints[j].lat,
                yj = polyPoints[j].lng;

            var intersect =
                yi > y != yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
            if (intersect) inside = !inside;
        }
    }

    return inside;
}

export function drawPolygon(map, editableLayers) {
    if (editableLayers == null) {
        editableLayers = new L.FeatureGroup();
    }
    map.addLayer(editableLayers);

    var drawPluginOptions = {
        position: "bottomleft",
        draw: {
            polygon: false,
            // disable toolbar item by setting it to false
            polyline: false,
            circle: false, // Turns off this drawing tool
            rectangle: true,
            marker: false,
        },
        edit: {
            featureGroup: editableLayers, //REQUIRED!!
            remove: true,
        },
    };

    // Initialise the draw control and pass it the FeatureGroup of editable layers
    var drawControl = new L.Control.Draw(drawPluginOptions);
    map.addControl(drawControl);

    map.on("draw:created", function (e) {
        editableLayers.clearLayers();
        var type = e.layerType,
            layer = e.layer;

        if (type === "marker") {
            layer.bindPopup("A popup!");
        }

        editableLayers.addLayer(layer);
    });
    return editableLayers;
}

export default brushModeProcessedData;
