import { useState } from 'react';
import { Link } from "react-router-dom";

import GameCardList from './Cards';


const Play = () => {
    const [routes, setRoutes] = useState([])

    const [cards, setCards] = useState([
        {id: 1, title: 'Sightseeing', location: "Haarlem", description: 'Een route om de mooiste plekjes in Haarlem te zien', dificulty: 1},
        {id: 4, title: 'Sightseeing', location: "Groningen", description: 'Een route om de mooiste plekjes in Groningen te zien', dificulty: 2},
        {id: 2, title: 'Sightseeing', location: "Gouda", description: 'Een route om de mooiste plekjes in Gouda te zien', dificulty: 1},
        {id: 6, title: 'Sightseeing', location: "Amsterdam", description: 'Een route om de mooiste plekjes in Amsterdam te zien', dificulty: 2},
        {id: 3, title: 'Sightseeing', location: "Breda", description: 'Een route om de mooiste plekjes in Breda te zien', dificulty: 1},
    ]);

    return (  
        <>
            <section className="App">
                {routes.map((routes, i) => {
                return (
                    <h2 key={i}>{routes.stad}</h2>
                );
                })}
            </section> 
     
            <article className="play">
                <section className="gamecards-container">
                    <GameCardList cards={cards}/>
                </section>

                <Link to="/create">
                    <section className="btn-secondary button-list">
                        <p>Eigen route?</p>
                    </section>
                </Link>
            </article>
        </>
    );
}
 
export default Play;