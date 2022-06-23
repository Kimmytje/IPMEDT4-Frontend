import { useState } from 'react';
import ButtonList from './Buttons';
import Background from './Background';


const Home = () => {
    const [buttons, setButtons] = useState([
        {title: 'Maak route', link: '/name'},
        {title: 'Speel spel', link: '/play'}
    ]);

    const [blobs, setBlobs] = useState([
        {id: 1, borderRadius: '57% 43% 72% 28% / 51% 55% 45% 49%', background: '--green', height: '45vh', width: '45vw', lr: '-30vw', tb: '-20vh', offsetTop: '1rem', offsetLeft: '1rem'},
        {id: 2, borderRadius: '35% 65% 13% 87% / 23% 41% 59% 77%', background: '--pink', height: '45vh', width: '55vw', lr: '60vw', tb: '40vh', offsetTop: '1rem', offsetLeft: '-2rem'},
        {id: 3, borderRadius: '35% 65% 42% 58% / 67% 41% 59% 33%', background: '--magenta', height: '32rem', width: '60rem', lr: '155vw', tb: '-15vh', offsetTop: '2rem', offsetLeft: '1rem'},
        {id: 4, borderRadius: '35% 65% 42% 58% / 67% 41% 59% 33%', background: '--magenta', height: '20rem', width: '20rem', lr: '-110vw', tb: '30vh', offsetTop: '-2rem', offsetLeft: '1rem'},
    ])

    return ( 
        <article className="home">
            <ButtonList buttons={buttons} title="Welcome"/>
             <Background blobs={blobs} />
        </article>
     );
}
 
export default Home;