/** @jsxImportSource theme-ui */
import { TileLayer, MapContainer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

const chicagoCoordinates = [41.8781, -87.53];
const defaultZoomLevel = 12;

const Maps = () => {

    return (
        <div sx={{ width: "100vw", height: "100vh", overflow: "hidden"}}>
            <MapContainer
                center={chicagoCoordinates}
                zoom={defaultZoomLevel}
                sx= {{width: "100vw", height: "100vh"}}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png"
                />
            </MapContainer>
        </div>
    );
};

export default Maps;
