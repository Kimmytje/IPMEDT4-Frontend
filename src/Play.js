import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import Loading from "./Loading";
import {GameCardList} from './Cards';

import axios from "axios";
let d;



const Play = () => {
    const [routes, setRoutes] = useState([])
    const [isPending, setisPending] = useState(true)

    useEffect(() => {
        async function getAllRoutes() {
          try {
            const routes = await axios.get("http://127.0.0.1:8000/api/routes") //de route van je localhost 
            
            d = routes.data;
            setRoutes(routes.data)
            setisPending(false);
    
          } catch (error) {
            console.log(error)
          }
        }
        getAllRoutes()
      }, [])
      console.log(d);

    return (  
        <>
          {isPending && <Loading/>}

            <article className="play">
                <section className="routecards-container">
                    <GameCardList cards={routes}/>
                </section>
            </article>

            <section className='ontop-bot'>
              <Link to="/name">
                  <section className="btn-secondary button-list">
                      <p>Eigen route?</p>
                  </section>
              </Link>
            </section>
            
        </>
    );
}
 
export default Play;