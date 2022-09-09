import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet";

const Map = ({ position }) => {
  const icon = L.icon({
    iconUrl: "./maker.png",
    iconSize: [38, 38],
  })
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ width: "100%", height: "100vh" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=92BOsJw7RZnlmOtk0mZX"
      />
      <Marker position={position} icon={icon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
