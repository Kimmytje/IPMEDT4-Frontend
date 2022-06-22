import Background from './Background';
import {useState} from 'react';
let inputValue;

const CreateRouteName = () => {
    const ButtonHandler = () =>
    {
        inputValue = document.getElementById("nameInput").value;
        window.location.href = `/create/${inputValue}/0`
    }

    const [blobs, setBlobs] = useState([
        {id: 1, borderRadius: '57% 43% 72% 28% / 51% 55% 45% 49%', background: '--green', height: '45rem', width: '45rem', lr: '-130vw', tb: '-20vh', offsetTop: '1rem', offsetLeft: '1rem'},
        {id: 2, borderRadius: '35% 65% 13% 87% / 23% 41% 59% 77%', background: '--pink', height: '45rem', width: '55rem', lr: '-50vw', tb: '40vh', offsetTop: '1rem', offsetLeft: '-2rem'},
        {id: 3, borderRadius: '35% 65% 42% 58% / 67% 41% 59% 33%', background: '--magenta', height: '32rem', width: '60rem', lr: '55vw', tb: '-15vh', offsetTop: '2rem', offsetLeft: '1rem'},
    ])

    return (  
        <article className='name'>
            <form className="form" action="http://127.0.0.1:8000/api/create_route" method="POST" name="route_form">
                <label>Geef je route een naam!</label>
                <input
                    id='nameInput'
                    type="text"
                    name="routename"
                    required
                />
                <label>Wat is de regio of stad van de route?</label>
                <input
                    type="text"
                    name="regio"
                    required
                />
                <button type='submit'>Done</button>
            </form>
            <Background blobs={blobs}/>
        </article>
    );
}

export default CreateRouteName;
export{
    CreateRouteName,
    inputValue
}