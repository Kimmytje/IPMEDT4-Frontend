import { useState } from 'react';
import ButtonList from './Buttons';


let voornaam = 'Iemand'
let achternaam = 'Anders'
let email = 'Iemand.j@hsleiden.nl'
let woonplaats = 'Niemandsland'





const Home = () => {
    const [buttons, setButtons] = useState([
        {title: 'Maak route', link: '/name'},
        {title: 'Speel spel', link: '/play'}
    ]);

    return ( 
        <>
        <article className="home">
            <ButtonList buttons={buttons} title="Welcome"/>
        </article>
        <form action="http://127.0.0.1:8000/api/testaddgebruiker" method="POST" name="bank_form">
            <input type="text" name="voornaam" value={voornaam} />
            <input type="text" name="achternaam" value={achternaam} />
            <input type="text" name="email" value={email} />
            <input type="text" name="woonplaats" value={woonplaats} />
            <button type = 'submit'>Click to submit</button>
        </form>
        </>
     );
}
 
export default Home;