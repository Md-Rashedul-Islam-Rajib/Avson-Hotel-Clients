import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Location = () => {
  return (
    <div className="w-96">
      <MapContainer
        center={[23.8362547136499, 90.41827641484844]}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

<Marker position={[23.8362547136499, 90.41827641484844]}> 
<Popup>
          Avson Hotel & Room Services
        </Popup>
</Marker>
      </MapContainer>
    </div>
  );
};

export default Location;
