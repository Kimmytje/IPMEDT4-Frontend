import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet'
import React, { useState } from "react";
import L from "leaflet";
import './Map2.css';


let markerArray = new Array;

const GetCenterFromDatabase = () => 
{
    // returns array with cords from database
    return [51.505, -0.09];
}

const LeafIcon = L.Icon.extend({
    options: {
        iconSize: [20, 35],
        iconAnchor: [10, 35]
    }
});
let summerIcon = new LeafIcon({iconUrl: require("../custom_icons/icon_summer.png")}),
    blueIcon = new LeafIcon({iconUrl: require("../custom_icons/icon_blue.png")});

const AddMarker = () =>
{
    const map = useMapEvents({
      dblclick: (ev) => {
        console.warn(map.mouseEventToLatLng(ev.originalEvent));
        let newMarker = L.marker(map.mouseEventToLatLng(ev.originalEvent), {icon: blueIcon}).addTo(map);
        map.addLayer(newMarker)
        markerArray.push(newMarker)
      }
    })
}

const RemoveMarker = () =>
{
    const map = useMapEvents({
        keypress: () => {
            map.removeLayer(markerArray[markerArray.length-1])
            markerArray.pop()
        }
      })
}

const ReturnToCenter = () =>
{
    const map = useMapEvents({
      zoom: () => {
        if(map.getZoom() < 17) map.flyTo(GetCenterFromDatabase(), 16);
      }
    })
}

const Map2 = () =>
{
    return (
        <MapContainer center={GetCenterFromDatabase()} zoom={16} minZoom={16} maxZoom={18} scrollWheelZoom={true} dragging={false} doubleClickZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
            <Marker position={[51.505, -0.09]} icon={summerIcon}>
                <Popup><p>Start location</p></Popup>
            </Marker>
        <AddMarker />
        <ReturnToCenter />
        <RemoveMarker />
        </MapContainer>
    );
}

export default Map2;