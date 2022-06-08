import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet'
import React, { useState } from "react";
import L from "leaflet";
import './Map3.css';


const LeafIcon = L.Icon.extend({
    options: {
        iconSize: [20, 35],
        iconAnchor: [10, 35]
    }
});
let summerIcon = new LeafIcon({iconUrl: require("../custom_icons/icon_summer.png")}),
    blueIcon = new LeafIcon({iconUrl: require("../custom_icons/icon_blue.png")});

const GetCenterFromDatabase = () => 
{
    // returns array with cords from database
    return [52.16825, 4.4853266];
    
}

const Map3 = () =>
{
  return (
    <MapContainer center={GetCenterFromDatabase()} zoom={4} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={GetCenterFromDatabase()} icon={summerIcon}>
                <Popup><p>Next location</p></Popup>
        </Marker>
      <GetLocation />
    </MapContainer>
  );
}

const GetLocation = () =>
{
    let map = useMap()
    const [position, setPosition] = useState(null)
    map.locate()
    map = useMapEvents({
        locationfound: (location) => {
            setPosition(location.latlng)
            let radius = location.accuracy
            let nextLoc = new L.LatLng(GetCenterFromDatabase()[0], GetCenterFromDatabase()[1])
            L.circle(location.latlng, radius).addTo(map);
            if(nextLoc.distanceTo(location.latlng) < 13) console.log("ok");
        },
    })
    return position === null ? null : (
        <Marker position={position} icon={blueIcon}>
            <Popup><p>You are here</p></Popup>
        </Marker>
    )
}

export default Map3;