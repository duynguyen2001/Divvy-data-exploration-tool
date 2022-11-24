/** @jsxImportSource theme-ui */
import { TileLayer, MapContainer } from "react-leaflet";
import { useRef } from "react";
import { useEffect } from "react";
import 'leaflet/dist/leaflet.css';
const chicagoCoordinates = [41.8781, -87.53];
const defaultZoomLevel = 12;

const Maps = () => {

    return (
        <div sx={{ width: "100vw", height: "100vh", border: "5px solid red", overflow: "hidden"}}>
            <MapContainer
                center={chicagoCoordinates}
                zoom={defaultZoomLevel}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>{" "}
        </div>
    );
};

export default Maps;
