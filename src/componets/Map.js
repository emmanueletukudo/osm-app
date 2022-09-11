import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet";

const position = [51.505, -0.09]

const SetNewView = ({ place }) => {
  console.log(place);
  const map = useMap()
  useEffect(() => {
    if (place) {
      map.setView(
        L.latLng(place?.lat, place?.lon),
        map.getZoom(),
        {
          animate: true,
        }
      )
    }
  }, [place])
  return null
}

const Map = ({ place }) => {
  const icon = L.icon({
    iconUrl: "./maker.png",
    iconSize: [38, 38],
  })

  const selectedPlace = [place?.lat, place?.lon];

  return (
    <MapContainer center={position} zoom={8} scrollWheelZoom={false} style={{ width: "100%", height: "100vh" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=92BOsJw7RZnlmOtk0mZX"
      />

      {place && (<Marker position={selectedPlace} icon={icon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>)}

      <SetNewView place={place} />
    </MapContainer>
  )
}

export default Map
