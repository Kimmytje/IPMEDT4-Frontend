import { useState } from 'react';
import { locLat, locLng } from './map_components/start_maps/StartMapClick';
import { nameOfRoute } from './Create';

const LngLatAdder = () =>
{
    if(locLat == null || locLng == null || nameOfRoute == null) window.history.go(-1);
    else window.location.href = `/create/checkpoint/select/${nameOfRoute}/${locLat}/${locLng}`;
    return ( 
        <section></section>
    )
}

export default LngLatAdder;
export{
    LngLatAdder
}