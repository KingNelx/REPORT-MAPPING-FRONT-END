import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix missing marker icons (especially in Vite)
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
let DefaultIcon = L.icon({
    iconUrl,
    shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

// Component to handle clicks and add marker
const LocationMarker = ({ onSelect }) => {
    const [position, setPosition] = useState(null);

    useMapEvents({
        click(e) {
            const { lat, lng } = e.latlng;
            setPosition([lat, lng]);
            onSelect({ lat, lng }); // send to parent (App)
        },
    });

    return position === null ? null : (
        <Marker position={position}>
            <Popup>
                📍 Damage reported here
                <br />
                Lat: {position[0].toFixed(4)} | Lng: {position[1].toFixed(4)}
            </Popup>
        </Marker>
    );
};

const MapView = ({ onSelectLocation }) => {
    const center = [14.5995, 120.9842]; // Manila

    return (
        <MapContainer
            center={center}
            zoom={13}
            style={{ height: "400px", width: "100%", borderRadius: "10px" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
            />
            <LocationMarker onSelect={onSelectLocation} />
        </MapContainer>
    );
};

export default MapView;
