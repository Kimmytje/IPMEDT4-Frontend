import { useState } from 'react';
import ButtonList from './Buttons';
import { StartMapClick, locLat, locLng } from './map_components/start_maps/StartMapClick';
import StartMapLoc from './map_components/start_maps/StartMapLoc';

let nameOfRoute;

// Choose to walk or make route from home
const Create = () => {
    const path = window.location.pathname
    const pathArray = path.split("/")
    nameOfRoute = pathArray[pathArray.length-1];

    const [buttons, setButtons] = useState([
        {title: 'Maak op afstand', link: `/create/now/${nameOfRoute}`},
        {title: 'Maak lopend', link: `/create/walk/${nameOfRoute}`}
    ]);

    return ( 
        <>
            <article className="create">
                <ButtonList buttons={buttons} title="Maak een route" />
            </article>
        </>
     );
}

// Page for making routes while walking
const CreateWalk = () => {
    const [buttons, setButtons] = useState([
        {title: 'Plaats checkpoint', link: '/create/checkpoint/select'},
    ]);

    return ( 
        <section className="createWalk">
            <StartMapLoc/>
            <ButtonList buttons={buttons}/>
        </section>
     );
}

// Page for making routes from home
const CreateNow = () => {
    const [buttons, setButtons] = useState([
        {title: 'Plaats checkpoint', link: `/linkhandler`},
    ]);

    return ( 
        <section className="createnNow">
            <StartMapClick/>
            <ButtonList buttons={buttons}/>
        </section>
     );
}
 
export {
    Create,
    CreateNow,
    CreateWalk,
    nameOfRoute
}