import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import {GameCardList} from './Cards';

import axios from "axios";
let d;



const Play = () => {
    const [routes, setRoutes] = useState([])
    useEffect(() => {
        async function getAllRoutes() {
          try {
            const routes = await axios.get("http://127.0.0.1:8000/api/routes") //de route van je localhost 
            
            d = routes.data;
            setRoutes(routes.data)
    
          } catch (error) {
            console.log(error)
          }
        }
        getAllRoutes()
      }, [])
      

    return (  
        <>     
            <article className="play">
                <section className="gamecards-container">
                    <GameCardList cards={routes}/>
                </section>

                <Link to="/name">
                    <section className="btn-secondary button-list">
                        <p>Eigen route?</p>
                    </section>
                </Link>
            </article>
        </>
    );
}
 
export default Play;