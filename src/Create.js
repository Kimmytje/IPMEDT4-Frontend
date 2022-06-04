import { useState } from 'react';
import ButtonList from './Buttons';
import Map from './Map';

// Choose to walk or make route from home
const Create = () => {
    const [buttons, setButtons] = useState([
        {title: 'Maak op afstand', link: '/create/now'},
        {title: 'Loop route', link: '/create/walk'}
    ]);

    return ( 
        <section className="create">
            <ButtonList buttons={buttons} title="Maak een route"/>
        </section>
     );
}

// Page for making routes while walking
const CreateWalk = () => {
    const [buttons, setButtons] = useState([
        {title: 'Plaats checkpoint', link: '/create/checkpoint'},
    ]);

    return ( 
        <section className="createWalk">
            <Map/>
            <ButtonList buttons={buttons}/>
        </section>
     );
}

// Page for making routes from home
const CreateNow = () => {
    const [buttons, setButtons] = useState([
        {title: 'Plaats checkpoint', link: '/create/checkpoint'},
    ]);

    return ( 
        <section className="createnNow">
            <Map/>
            <ButtonList buttons={buttons}/>
        </section>
     );
}
 
export {
    Create,
    CreateNow,
    CreateWalk,
}