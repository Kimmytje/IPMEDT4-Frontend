import { MapContainer, TileLayer, Marker, useMapEvents, useMap, Popup } from 'react-leaflet'
import React, { useState } from "react";
import './StartMapLoc.css';

const StartMapLoc = () =>
{
  return (
    <MapContainer center={[51.505, -0.09]} zoom={4} scrollWheelZoom={true} dragging={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocateLocation />
    </MapContainer>
  );
}

const LocateLocation = () =>
{
  let map = useMap()
  const [position, setPosition] = useState(null)
  map.locate()
  map = useMapEvents({
    locationfound: (location) => {
      setPosition(location.latlng)
      map.flyTo(location.latlng, 18)
      console.log(location.latlng)
    },
  })
  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

export default StartMapLoc;