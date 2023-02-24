import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./leaflet.css";

function LeafletMap() {

    const position = [33.5731, 	-7.603869];
    const zoomLvl = 13;  
  return (
    <div className='map-section-container'  >
      <h1>VISIT US</h1>
      <h3>Come visit us and do not hesitate to contact us to place your order.</h3>
      <MapContainer center={position} zoom={zoomLvl}>
        <TileLayer
            attribution={maptiler_att}
            url={maptiler_url}
        />
        <Marker position={position} >
            <Popup>Salstore</Popup>
        </Marker>

      </MapContainer>
    </div>
  )
}

const maptiler_att = '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';
const maptiler_url = "https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=JbNpD6hr3e8v1CCTCBLk";

export default LeafletMap