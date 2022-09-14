import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet";

const position = [51.505, -0.09]

const SetNewView = ({ place }) => {
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
    <MapContainer data-testid="map" center={position} zoom={8} scrollWheelZoom={false} style={{ width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=92BOsJw7RZnlmOtk0mZX"
      />

      {place && (<Marker position={selectedPlace} icon={icon}>
        <Popup>
          <p className="text-1xl font-black" style={{ maxWidth: "200px" }}>{place?.display_name}</p>
          {place?.address.city && <p className="text-md font-gray">City: {place?.address.city}</p>}
          <p className="text-md font-gray">Country: {place?.address.country}</p>
        </Popup>
      </Marker>)}

      <SetNewView place={place} />
    </MapContainer>
  )
}

export default Map
