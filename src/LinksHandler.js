import { curLat, curLng } from './map_components/start_maps/StartMapClick';
import { locLat, locLng } from './map_components/start_maps/StartMapLoc';
import { nameOfRoute, currentNumber } from './Create';

const LngLatAdder = () =>
{
    console.warn(nameOfRoute)
    if(curLat == null || curLng == null || nameOfRoute == null) window.history.back();
    else window.location.href = `/create/checkpoint/select/${nameOfRoute}/${currentNumber}/${curLat}/${curLng}`;
    return ( 
        <section></section>
    )
}

const LngLatGetter = () =>
{
    console.warn(locLat, locLng, nameOfRoute)
    if(locLat == null || locLng == null || nameOfRoute == null) window.history.back();
    else window.location.href = `/create/checkpoint/select/${nameOfRoute}}/${currentNumber}/${locLat}/${locLng}`;
    return(
        <section></section>
    )
}

export default LngLatAdder;
export{
    LngLatAdder,
    LngLatGetter
}