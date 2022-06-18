import { useState } from 'react';
import axios from "axios";
import { curLat, curLng } from './map_components/start_maps/StartMapClick';
import { locLat, locLng } from './map_components/start_maps/StartMapLoc';
import { nameOfRoute } from './Create';
import {  } from './Checkpoint';

const LngLatAdder = () =>
{
    console.warn(nameOfRoute)
    if(curLat == null || curLng == null || nameOfRoute == null) window.history.back();
    else window.location.href = `/create/checkpoint/select/${nameOfRoute}/${curLat}/${curLng}`;
    return ( 
        <section></section>
    )
}

const LngLatGetter = () =>
{
    console.warn(locLat, locLng, nameOfRoute)
    if(locLat == null || locLng == null || nameOfRoute == null) window.history.back();
    else window.location.href = `/create/checkpoint/select/${nameOfRoute}/${locLat}/${locLng}`;
    return(
        <section></section>
    )
}

const PostData = async () =>
{
    let payload = {
        "routename": null,
        "pointnumber": null,
        "latitude": null,
        "longitude": null,
        "activity_title": null,
        "activity_header": null,
        "activity_awnser": null,
        "activity_false1": null,
        "activity_false2": null,
        "activity_false3": null
    }

    if (!window.isScriptLoaded) 
    {
        const pathData = window.location.pathname.split("/")
        let rawData = new Array()
        // voor een reden die ik niet weet werkte een normale if-statement niet
        // je kan het proberen om te veranderen maar als het niet werkt dan breekt de hele code
        // you have been warned
        for(let i = 0; i<pathData.length; i++)
        {
            let element = pathData[i]
            switch (element)
            {
                case "":
                    break
                case "linkhandler":
                    break
                case "submit_data":
                    break
                default:
                    rawData.push(element)
            }
        }

        for(let i = 0; i< rawData.length; i++)
        {
            switch (i){
                case 0:
                    payload.activity_title = rawData[i]
                    break
                case 1:
                    payload.routename = rawData[i]
                    break
                case 2:
                    payload.latitude = rawData[i]
                    break
                case 3:
                    payload.longitude = rawData[i]
                    break
                case 4:
                    payload.activity_header = rawData[i]
                    break
                case 5:
                    payload.activity_awnser = rawData[i]
                    break
                default:
                    console.error("INDEX ERROR")
            }
        }
        window.isScriptLoaded = true;
    }
    try{
        const res = await axios.post('http://127.0.0.1:8000/api/checkpoint', payload);
        if(res.data.status === 200)
        {
            console.warn(res.data.message);
        }
    } catch (error){
        console.error(error.res.data)
    }
    

    return(
        <section></section>
    )
}

export default LngLatAdder;
export{
    LngLatAdder,
    LngLatGetter,
    PostData
}