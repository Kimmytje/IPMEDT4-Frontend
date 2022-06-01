import { useState } from 'react';
import ButtonList from './buttons';

const Home = () => {
    const [buttons, setButtons] = useState([
        {title: 'Maak route', link: '/create'},
        {title: 'Speel spel', link: '/play'}
    ]);

    return ( 
        <section className="home">
            <ButtonList buttons={buttons} title="Welcome"/>
        </section>
     );
}
 
export default Home;