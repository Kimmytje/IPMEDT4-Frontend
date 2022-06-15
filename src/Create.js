import { useState } from 'react';
import ButtonList from './Buttons';
import Map from './Map';

// Choose to walk or make route from home
const Create = () => {
    const [buttons, setButtons] = useState([
        {title: 'Maak op afstand', link: '/create/now'},
        {title: 'Maak lopend', link: '/create/walk'}
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
        {title: 'Plaats checkpoint', link: '/create/checkpoint'},
    ]);

    return ( 
        <>
            <article className="createWalk">
                <Map />
                <ButtonList buttons={buttons} />
            </article>
        </>
     );
}

// Page for making routes from home
const CreateNow = () => {
    const [buttons, setButtons] = useState([
        {title: 'Plaats checkpoint', link: '/create/checkpoint'},
    ]);

    return ( 
        <>
            <article className="createnNow">
                <Map/>
                <ButtonList buttons={buttons}/>
            </article>
        </>
            
     );
}
 
export {
    Create,
    CreateNow,
    CreateWalk,
}