import { useState } from 'react';
import Background from './Background';
import ButtonList from './Buttons';
import { StartMapClick } from './map_components/start_maps/StartMapClick';
import StartMapLoc from './map_components/start_maps/StartMapLoc';

let nameOfRoute;
let currentNumber;

// Choose to walk or make route from home
const Create = () => {
    const path = window.location.pathname
    const pathArray = path.split("/")
    nameOfRoute = pathArray[pathArray.length-2];

    const [buttons, setButtons] = useState([
        {title: 'plaats op afstand', link: `/create/now/${nameOfRoute}/${CheckpointNumberHandler(pathArray[pathArray.length-1])}`},
        {title: 'plaats op locatie', link: `/create/walk/${nameOfRoute}/${CheckpointNumberHandler(pathArray[pathArray.length-1])}`},
        {title: 'Route afronden', link: "/"}
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
        {title: 'Plaats checkpoint', link: '/linkhandler/onlocation'},
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
        {title: 'Plaats checkpoint', link: '/linkhandler'},
    ]);

    return ( 
        <section className="createnNow">
            <StartMapClick/>
            <ButtonList buttons={buttons}/>
        </section>
     );
}

const CheckpointNumberHandler = (stringNumber) =>
{
    let intNumber = parseInt(stringNumber)
    intNumber++;
    currentNumber = intNumber;
    return intNumber;
}
 
export {
    Create,
    CreateNow,
    CreateWalk,
    nameOfRoute,
    currentNumber
}