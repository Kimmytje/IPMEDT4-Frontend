import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet'
import L from "leaflet";
import axios from "axios";
import Back from './Back';

let d;
let checkpointsArray = [];
let checkpointMarker;
let gameName;
let checkpointCounter;

const GetDataFromDatabase = (nName = 2, nCount = 3) =>
{
    const path = window.location.pathname;
    gameName = path.split('/')[nName]
    checkpointCounter = path.split('/')[nCount]
    useEffect(() => {
        async function getAllCheckpointData() {
            try {
                const checkpoints = await axios.get("http://127.0.0.1:8000/api/checkpoints") //de route van je localhost 
                
                if (!window.isScriptLoaded) 
                {
                    d = checkpoints.data;
                    for(let i =0; i<d.length; i++)
                    {
                        d[i].routename = d[i].routename.replace("%20", " ")
                        d[i].routename = d[i].routename.replace("%7D", "")
                        if(d[i].routename === gameName)
                        {
                            checkpointsArray.push(d[i])
                        }
                    }
                    const currentData = checkpointsArray[checkpointCounter]
                    try
                    {
                        document.getElementById("activity_title").innerHTML = currentData.activity_title;
                        document.getElementById("activity_header").innerHTML = currentData.activity_header;
                    } catch (error) {
                        // verwacht dat id's niet gevonden wordt
                        // niet echt een error dus
                    }
                    window.isScriptLoaded = true;
                }

            } catch (error) {
                console.log(error)
            }
        }
        getAllCheckpointData()
    }, [])
}

const LeafIcon = L.Icon.extend({
    options: {
        iconSize: [20, 35],
        iconAnchor: [10, 35]
    }
});
let summerIcon = new LeafIcon({iconUrl: require("./Images/icon_summer.png")}),
    blueIcon = new LeafIcon({iconUrl: require("./Images/icon_blue.png")});

const GetCheckpointFromDatabase = () => 
{
    let currentCheckpointData = checkpointsArray[checkpointCounter];
    let lat = parseFloat(currentCheckpointData.latitude)
    let lng = parseFloat(currentCheckpointData.longitude)
    return [lat, lng];
}

const GetPlayerLocation = () =>
{
    let map = useMap()
    const [position, setPosition] = useState(null)
    map.locate()
    map = useMapEvents({
        locationfound: (location) => {
            setPosition(location.latlng)
            let radius = location.accuracy
            L.circle(location.latlng, radius).addTo(map);
            
            if(!checkpointMarker)
                checkpointMarker = L.marker(GetCheckpointFromDatabase(), {icon: summerIcon}).addTo(map);

            let nextLoc = new L.LatLng(GetCheckpointFromDatabase()[0], GetCheckpointFromDatabase()[1])
            if(nextLoc.distanceTo(location.latlng) < 13) GoToActivity();
        },
    })
    return position === null ? null : (
        <Marker position={position} icon={blueIcon}>
            <Popup><p>You are here</p></Popup>
        </Marker>
    )
}

const GoToActivity = () =>
{
    window.location.href = `/game/activity/${gameName}/${checkpointCounter}`
}

const GameHandler = () =>
{
    GetDataFromDatabase()
    return(
        <>
            <Back/>
            <MapContainer center={[51.9813876, 4.4700281]} zoom={7} scrollWheelZoom={true}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <GetPlayerLocation />
            </MapContainer>
            <section>
                <p>Deze button is voor dev only en zal niet in de officiele game avaible zijn</p>
                <button onClick={GoToActivity}>TEST</button>
            </section>
        </>
    )
}

const GoToGame = () =>
{
    checkpointCounter++;
    if(checkpointCounter < checkpointsArray.length) 
        window.location.href = `/game/${gameName}/${checkpointCounter}`
    else window.location.href = "/game/end"
}

const ActivityHandler = () =>
{
    GetDataFromDatabase(3, 4)
    return(
        <>
            <section>
                <h1 id='activity_title'></h1>
                <p id='activity_header'></p>
            </section>
            <button onClick={GoToGame}>Finish Checkpoint</button>
        </>
    )
}

const ReturnToMenu = () =>
{
    window.location.href = "/"
}

const FinishScreen = () =>
{
    return(
        <>
            <h1>Goed gedaan,</h1>
            <p>je hebt alle checkpoints behaalt</p>
            <button onClick={ReturnToMenu}>Eindig route</button>
        </>
    )
}

export{
    GameHandler,
    ActivityHandler,
    FinishScreen
}