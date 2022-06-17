import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from 'react-leaflet'
import React, { useState } from "react";
import './StartMapClick.css';
let breakPoint = 0;
let curLat;
let curLng;

const StartMapClick = () =>
{
  return (
    <MapContainer center={[51.505, -0.09]} zoom={4} scrollWheelZoom={true}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <StartLocation />
      <ClickMarker />
    </MapContainer>
  );
}

const StartLocation = () =>
{
  let map = useMap()
  const [position, setPosition] = useState(null)
  map.locate()
  breakPoint++;
  map = useMapEvents({
    locationfound: (location) => {
      if (breakPoint >= 3){
        map.stopLocate()
        return;
      } 
      setPosition(location.latlng)
      map.flyTo(location.latlng, 14)
    },
  })
}

const ClickMarker = () =>
{
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click: (ev) => {
      origin = map.mouseEventToLatLng(ev.originalEvent)
      curLat = origin.lat;
      curLng = origin.lng;
      setPosition(map.mouseEventToLatLng(ev.originalEvent));
    }
  })
  return position === null ? null : (
    <Marker position={position}></Marker>
  )
}

export default StartMapClick;

export {
  StartMapClick,
  curLat, curLng
}