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

    const [blobs, setBlobs] = useState([
        {id: 1, borderRadius: '57% 43% 72% 28% / 51% 55% 45% 49%', background: '--green', height: '45vh', width: '45vw', lr: '-230vw', tb: '-20vh', offsetTop: '1rem', offsetLeft: '1rem'},
        {id: 2, borderRadius: '35% 65% 13% 87% / 23% 41% 59% 77%', background: '--pink', height: '45vh', width: '55vw', lr: '-140vw', tb: '40vh', offsetTop: '1rem', offsetLeft: '-2rem'},
        {id: 3, borderRadius: '35% 65% 42% 58% / 67% 41% 59% 33%', background: '--magenta', height: '32vh', width: '40vw', lr: '-20vw', tb: '-20vh', offsetTop: '2rem', offsetLeft: '1rem'},
        {id: 5, borderRadius: '35% 65% 68% 32% / 42% 58% 42% 58%', background: '--purple', height: '40vh', width: '40vw', lr: '80vw', tb: '70vh', offsetLeft: '-2.5rem', offsetTop: '-2rem'},
        {id: 6, borderRadius: '82% 18% 17% 83% / 42% 58% 42% 58%', background: '--pink', height: '40vh', width: '40vw', lr: '190vw', tb: '150vh', offsetLeft: '-2.5rem', offsetTop: '-2rem'},
        {id: 7, borderRadius: '42% 58% 42% 58% / 82% 18% 17% 83%', background: '--green', height: '40vh', width: '40vw', lr: '190vw', tb: '-40vh', offsetLeft: '-2.5rem', offsetTop: '-1rem'},
        {id: 8, borderRadius: '81% 19% 53% 47% / 16% 58% 42% 84%', background: '--pink', height: '40vh', width: '40vw', lr: '75vw', tb: '-90vh', offsetLeft: '2.5rem', offsetTop: '-1rem'},
    ])

    const [buttons, setButtons] = useState([
        {title: 'plaats op afstand', link: `/create/now/${nameOfRoute}/${CheckpointNumberHandler(pathArray[pathArray.length-1])}`},
        {title: 'plaats op locatie', link: `/create/walk/${nameOfRoute}/${CheckpointNumberHandler(pathArray[pathArray.length-1])}`},
        {title: 'Route afronden', link: "/"}
    ]);

    return ( 
        <>
            <article className="create">
                <ButtonList buttons={buttons} title="Maak een route" />
                <Background blobs={blobs}/>
            </article>
        </>
     );
}

// Page for making routes while walking
const CreateWalk = () => {
    const [blobs, setBlobs] = useState([
        {id: 3, borderRadius: '35% 65% 42% 58% / 67% 41% 59% 33%', background: '--magenta', height: '32vh', width: '40vw', lr: '-120vw', tb: '-120vh', offsetTop: '2rem', offsetLeft: '1rem'},
        {id: 5, borderRadius: '35% 65% 68% 32% / 42% 58% 42% 58%', background: '--purple', height: '40vh', width: '40vw', lr: '-20vw', tb: '-30vh', offsetLeft: '-2.5rem', offsetTop: '2rem'},
        {id: 6, borderRadius: '82% 18% 17% 83% / 42% 58% 42% 58%', background: '--pink', height: '40vh', width: '40vw', lr: '90vw', tb: '50vh', offsetLeft: '-2.5rem', offsetTop: '-2rem'},
    ])

    const [buttons, setButtons] = useState([
        {title: 'Plaats checkpoint', link: '/linkhandler/onlocation'},
    ]);

    return ( 
        <section className="createWalk">
            <StartMapLoc/>
            <ButtonList buttons={buttons}/>

            <Background blobs={blobs}/>
        </section>
     );
}

// Page for making routes from home
const CreateNow = () => {
    const [blobs, setBlobs] = useState([
        {id: 3, borderRadius: '35% 65% 42% 58% / 67% 41% 59% 33%', background: '--magenta', height: '32vh', width: '40vw', lr: '-120vw', tb: '80vh', offsetTop: '2rem', offsetLeft: '1rem'},
        {id: 5, borderRadius: '35% 65% 68% 32% / 42% 58% 42% 58%', background: '--purple', height: '40vh', width: '40vw', lr: '-20vw', tb: '170vh', offsetLeft: '-2.5rem', offsetTop: '-2rem'},
        {id: 7, borderRadius: '42% 58% 42% 58% / 82% 18% 17% 83%', background: '--green', height: '40vh', width: '40vw', lr: '90vw', tb: '60vh', offsetLeft: '-2.5rem', offsetTop: '-1rem'},
        {id: 8, borderRadius: '81% 19% 53% 47% / 16% 58% 42% 84%', background: '--pink', height: '40vh', width: '40vw', lr: '-25vw', tb: '10vh', offsetLeft: '2.5rem', offsetTop: '-1rem'},
    ])

    const [buttons, setButtons] = useState([
        {title: 'Plaats checkpoint', link: '/linkhandler'},
    ]);

    return ( 
        <section className="createnNow">
            <StartMapClick/>
            <ButtonList buttons={buttons}/>

            <Background blobs={blobs}/>
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