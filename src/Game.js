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
let circle;
let lat;
let lng;
let goToPlayer = false;

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
                    console.log(d);

                    for(let i =0; i<d.length; i++)
                    {
                        gameName = gameName.replace("%20", " ")
                        gameName = gameName.replace("%7D", "")
                        d[i].routename = d[i].routename.replace("%20", " ")
                        d[i].routename = d[i].routename.replace("%7D", "")
                        d[i].routename = d[i].routename.replace("%20", " ")
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
                        if(currentData.activity_awnser != "null")
                        {
                            const elements = document.querySelectorAll(".game-puzzel--input");
                            console.log(elements)
                            elements.forEach(element => {
                                console.log('c')
                                element.classList.remove("invis");
                                element.style.display = "block"
                            });
                        }
                    } catch (error) {
                        // verwacht dat id's niet gevonden wordt
                        // niet echt een error dus
                    }
                    GetCheckpointFromDatabase()
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
    lat = parseFloat(currentCheckpointData.latitude)
    lng = parseFloat(currentCheckpointData.longitude);
}

const GetPlayerLocation = () =>
{
    let map = useMap()
    const [position, setPosition] = useState(null)
    map.locate()
    map = useMapEvents({
        locationfound: (location) => {
            setPosition(location.latlng)
            let radius = 30

            if(circle == null) circle = L.circle(location.latlng, radius).addTo(map);
            else circle.setLatLng(location.latlng)
            
            if(!checkpointMarker)
                checkpointMarker = L.marker([lat, lng], {icon: summerIcon}).addTo(map);

            let nextLoc = new L.LatLng(lat, lng)
            if(nextLoc.distanceTo(location.latlng) < 30) GoToActivity();

            if(goToPlayer)
            {
                map.flyTo(location.latlng, 18)
                goToPlayer = false
            }
        },
    })
    return position === null ? null : (
        <Marker position={position} icon={blueIcon}>
            <Popup><p>You are here</p></Popup>
        </Marker>
    )
}

const FlyToPlayer = () =>
{
    goToPlayer = true;
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
            <button onClick={FlyToPlayer} className='btn-primary'>Ga naar jouw positie</button>
            <section className='dev-section'>
                <p>Deze button is voor dev only en zal niet in de officiele game avaible zijn</p>
                <button className='btn-primary' onClick={GoToActivity}>TEST</button>
            </section>
        </>
    )
}

const GoToGame = () =>
{
    let awnserData = checkpointsArray[checkpointCounter].activity_awnser
    checkpointCounter++;
    if(awnserData != "null")
    {
        console.warn(checkpointsArray[checkpointCounter])
        const value = document.getElementById("js--game-input").value
        if(awnserData == value)
        {
            if(checkpointCounter < checkpointsArray.length) window.location.href = `/game/${gameName}/${checkpointCounter}`
            else window.location.href = "/game/end"
        } else window.location.reload()
    }
    else if(checkpointCounter < checkpointsArray.length) 
        window.location.href = `/game/${gameName}/${checkpointCounter}`
    else window.location.href = "/game/end"
}

const ActivityHandler = () =>
{
    GetDataFromDatabase(3, 4)
    return(
        <>
            <section>
                <h1 className='activity-title' id='activity_title'></h1>
                <p className='activity-header' id='activity_header'></p>
                <label className='invis game-puzzel--input'><h2>Jouw antwoord:</h2></label>
                <input className='invis game-input game-puzzel--input' type="text" id='js--game-input'></input>
                <button className='btn-primary' onClick={GoToGame}>Finish Checkpoint</button>
            </section>
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
            <h1 className='activity-title'>Goed gedaan,</h1>
            <h2>je hebt alle checkpoints behaalt</h2>
            <button className='btn-primary' onClick={ReturnToMenu}>Eindig route</button>
        </>
    )
}

export{
    GameHandler,
    ActivityHandler,
    FinishScreen
}