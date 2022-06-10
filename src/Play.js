import { useState } from 'react';
import GameCardList from './Cards';


const Play = () => {
    const [routes, setRoutes] = useState([])

    const [cards, setCards] = useState([

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
                    <GameCardList/>
                </section>

                <section className="btn-secondary button-list">
                    <p>Eigen route?</p>
                </section>
            </article>
        </>
    );
}
 
export default Play;