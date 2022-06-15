import { useState } from 'react';
import ButtonList from './Buttons';

const Home = () => {
    const [buttons, setButtons] = useState([
        {title: 'Maak route', link: '/create'},
        {title: 'Speel spel', link: '/play'}
    ]);

    return ( 
        <article className="home">
            <ButtonList buttons={buttons} title="Welcome"/>
        </article>
     );
}
 
export default Home;