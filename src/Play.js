import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import Loading from "./Loading";
import {GameCardList} from './Cards';

import axios from "axios";
import Background from './Background';
let d;



const Play = () => {
    const [routes, setRoutes] = useState([])
    const [isPending, setisPending] = useState(true)

    const [blobs, setBlobs] = useState([
      {id: 1, borderRadius: '57% 43% 72% 28% / 51% 55% 45% 49%', background: '--green', height: '45vh', width: '45vw', lr: '70vw', tb: '-20vh', offsetTop: '1rem', offsetLeft: '1rem'},
      {id: 2, borderRadius: '35% 65% 13% 87% / 23% 41% 59% 77%', background: '--pink', height: '45vh', width: '55vw', lr: '150vw', tb: '40vh', offsetTop: '1rem', offsetLeft: '-2rem'},
      {id: 4, borderRadius: '35% 65% 42% 58% / 67% 41% 59% 33%', background: '--magenta', height: '20vh', width: '20vw', lr: '-10vw', tb: '30vh', offsetTop: '-2rem', offsetLeft: '1rem'},
  ])

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
                  <section className="btn-secondary">
                      <p>Eigen route?</p>
                  </section>
              </Link>
            </section>
            
            <Background blobs={blobs}/>
        </>
    );
}
 
export default Play;