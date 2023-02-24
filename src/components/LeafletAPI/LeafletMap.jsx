import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./leaflet.css";

function LeafletMap() {

    const position = [33.5731, 	-7.603869];
    const zoomLvl = 13;  
    const mapURL = import.meta.env.VITE_MAPTILER_MAP_URL;
    const mapAttribution = import.meta.env.VITE_MAPTILER_MAP_ATTRIBUTION;

  return (
    <div className='map-section-container'  >
      <h1>VISIT US</h1>
      <h3>Come visit us and do not hesitate to contact us to place your order.</h3>
      <MapContainer center={position} zoom={zoomLvl}>
        <TileLayer
            attribution={mapAttribution}
            url={mapURL}
        />
        <Marker position={position} >
            <Popup>Salstore</Popup>
        </Marker>

      </MapContainer>
    </div>
  )
}

export default LeafletMap