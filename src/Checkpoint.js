import { useState, useEffect } from 'react';
import {ActivityCardList} from './Cards';
import Loading from "./Loading";
import Background from "./Background";

import axios from 'axios';

let d;

const CheckpointSelect = () => {
    const [cards, setCards] = useState([]);
    const [isPending, setisPending] = useState([true]);

    const [blobs, setBlobs] = useState([
        {id: 9, borderRadius: '35% 65% 68% 32% / 42% 58% 42% 58%', background: '--purple', height: '40vh', width: '40vw', lr: '-20vw', tb: '70vh', offsetLeft: '2rem', offsetTop: '2rem'},
        {id: 10, borderRadius: '82% 18% 17% 83% / 42% 58% 42% 58%', background: '--pink', height: '40vh', width: '40vw', lr: '80vw', tb: '20vh', offsetLeft: '-2.5rem', offsetTop: '0rem'},
        {id: 11, borderRadius: '42% 58% 42% 58% / 82% 18% 17% 83%', background: '--green', height: '20vh', width: '20vw', lr: '195vw', tb: '40vh', offsetLeft: '-2.5rem', offsetTop: '-1rem'},
        {id: 12, borderRadius: '81% 19% 53% 47% / 16% 58% 42% 84%', background: '--magenta', height: '40vh', width: '40vw', lr: '180vw', tb: '90vh', offsetLeft: '-2.5rem', offsetTop: '-1rem'},
    ]);

    useEffect(() => {
        async function getAllCards() {
          try {
            const cards = await axios.get("http://127.0.0.1:8000/api/sa") //de route van je localhost 
            
            d = cards.data;
            setCards(cards.data)
            setisPending(false);
    
          } catch (error) {
            console.log(error)
          }
        }
        getAllCards()
      }, [])
      console.log(d);

    return (  
        <>
            {isPending && <Loading/>}

            <ActivityCardList cards={cards}/>

            <Background blobs={blobs}/>
        </>
        
    );
}

const CreateMultipleChoiceForm = () =>
{
    const [blobs, setBlobs] = useState([
        {id: 9, borderRadius: '35% 65% 68% 32% / 42% 58% 42% 58%', background: '--purple', height: '40vh', width: '40vw', lr: '-120vw', tb: '70vh', offsetLeft: '2rem', offsetTop: '2rem'},
        {id: 10, borderRadius: '82% 18% 17% 83% / 42% 58% 42% 58%', background: '--pink', height: '40vh', width: '40vw', lr: '-20vw', tb: '20vh', offsetLeft: '2.5rem', offsetTop: '0rem'},
        {id: 11, borderRadius: '42% 58% 42% 58% / 82% 18% 17% 83%', background: '--green', height: '20vh', width: '20vw', lr: '95vw', tb: '20vh', offsetLeft: '-2.5rem', offsetTop: '-1rem'},
        {id: 12, borderRadius: '81% 19% 53% 47% / 16% 58% 42% 84%', background: '--magenta', height: '40vh', width: '40vw', lr: '80vw', tb: '90vh', offsetLeft: '-2.5rem', offsetTop: '-1rem'},
    ]);

    return (  
        <section className='form'>
            <form >
                <label>Vraag:</label>
                <textarea
                    required
                ></textarea>

                    <label>Antwoord A:</label>
                    <input
                        type="text" 
                        required
                    />
                    <label>Antwoord B:</label>
                    <input
                        type="text" 
                        required
                    />
                    <label>Antwoord C:</label>
                    <input
                        type="text" 
                    />
                    <label>Antwoord D:</label>
                    <input
                        type="text" 
                    />

                <button>Done</button>
            </form>

            <Background blobs={blobs}/>
        </section>
    );
}

const CreateCommentForm = () =>
{
    const [blobs, setBlobs] = useState([
        {id: 9, borderRadius: '35% 65% 68% 32% / 42% 58% 42% 58%', background: '--purple', height: '40vh', width: '40vw', lr: '-120vw', tb: '70vh', offsetLeft: '2rem', offsetTop: '2rem'},
        {id: 10, borderRadius: '82% 18% 17% 83% / 42% 58% 42% 58%', background: '--pink', height: '40vh', width: '40vw', lr: '-20vw', tb: '20vh', offsetLeft: '2.5rem', offsetTop: '0rem'},
        {id: 11, borderRadius: '42% 58% 42% 58% / 82% 18% 17% 83%', background: '--green', height: '20vh', width: '20vw', lr: '95vw', tb: '20vh', offsetLeft: '-2.5rem', offsetTop: '-1rem'},
        {id: 12, borderRadius: '81% 19% 53% 47% / 16% 58% 42% 84%', background: '--magenta', height: '60vh', width: '40vw', lr: '80vw', tb: '90vh', offsetLeft: '-2.5rem', offsetTop: '-1rem'},
    ]);

    let dataFromPath = DataHandler()
    return (  
        <section className='form'>
            <form action="http://127.0.0.1:8000/api/create_checkpoint" method="POST" name="comment_form">
                <input className='invis' type="text" name="routename" value={dataFromPath[1]}/>
                <input className='invis' type="text" name="pointnumber" value={dataFromPath[2]}/>
                <input className='invis' type="text" name="latitude" value={dataFromPath[3]}/>
                <input className='invis' type="text" name="longitude" value={dataFromPath[4]}/>
                <input className='invis' type="text" name="activity_title" value={dataFromPath[0]}/>
                <input className='invis' type="text" name="activity_awnser" value={"null"}/>
                <label>Comment:</label>
                <textarea 
                    type="text" 
                    name="activity_header"
                    cols={50}
                    rows={4}
                ></textarea>
                <button type = 'submit'>Done</button>
            </form>

            <Background blobs={blobs}/>
        </section>
    );
}

const CreateActionForm = () =>
{
    const [blobs, setBlobs] = useState([
        {id: 9, borderRadius: '35% 65% 68% 32% / 42% 58% 42% 58%', background: '--purple', height: '40vh', width: '40vw', lr: '-120vw', tb: '70vh', offsetLeft: '2rem', offsetTop: '2rem'},
        {id: 10, borderRadius: '82% 18% 17% 83% / 42% 58% 42% 58%', background: '--pink', height: '40vh', width: '40vw', lr: '-20vw', tb: '20vh', offsetLeft: '2.5rem', offsetTop: '0rem'},
        {id: 11, borderRadius: '42% 58% 42% 58% / 82% 18% 17% 83%', background: '--green', height: '20vh', width: '20vw', lr: '95vw', tb: '20vh', offsetLeft: '-2.5rem', offsetTop: '-1rem'},
        {id: 12, borderRadius: '81% 19% 53% 47% / 16% 58% 42% 84%', background: '--magenta', height: '60vh', width: '40vw', lr: '80vw', tb: '90vh', offsetLeft: '-2.5rem', offsetTop: '-1rem'},
    ]);
    
    let dataFromPath = DataHandler()
    return (
            <section className='form'>
            <form action="http://127.0.0.1:8000/api/create_checkpoint" method="POST" name="action_form">
                <input className='invis' type="text" name="routename" value={dataFromPath[1]}/>
                <input className='invis' type="text" name="pointnumber" value={dataFromPath[2]}/>
                <input className='invis' type="text" name="latitude" value={dataFromPath[3]}/>
                <input className='invis' type="text" name="longitude" value={dataFromPath[4]}/>
                <input className='invis' type="text" name="activity_title" value={dataFromPath[0]}/>
                <input className='invis' type="text" name="activity_awnser" value={"null"}/>
                <label>opdracht:</label>
                <textarea 
                    type="text" 
                    name="activity_header"
                    cols={50}
                    rows={4}
                ></textarea>
                <button type='submit'>Done</button>
            </form>

            <Background blobs={blobs}/>
        </section>                                                      
    );
}

const CreatePuzzelForm = () =>
{
    const [blobs, setBlobs] = useState([
        {id: 9, borderRadius: '35% 65% 68% 32% / 42% 58% 42% 58%', background: '--purple', height: '40vh', width: '40vw', lr: '-120vw', tb: '70vh', offsetLeft: '2rem', offsetTop: '2rem'},
        {id: 10, borderRadius: '82% 18% 17% 83% / 42% 58% 42% 58%', background: '--pink', height: '40vh', width: '40vw', lr: '-20vw', tb: '20vh', offsetLeft: '2.5rem', offsetTop: '0rem'},
        {id: 11, borderRadius: '42% 58% 42% 58% / 82% 18% 17% 83%', background: '--green', height: '20vh', width: '20vw', lr: '95vw', tb: '20vh', offsetLeft: '-2.5rem', offsetTop: '-1rem'},
        {id: 12, borderRadius: '81% 19% 53% 47% / 16% 58% 42% 84%', background: '--magenta', height: '60vh', width: '40vw', lr: '80vw', tb: '90vh', offsetLeft: '-2.5rem', offsetTop: '-1rem'},
    ]);
    
    let dataFromPath = DataHandler()
    return (  
        <section className='form'>
            <form action="http://127.0.0.1:8000/api/create_checkpoint" method="POST" name="foto_form">
                <input className='invis' type="text" name="routename" value={dataFromPath[1]}/>
                <input className='invis' type="text" name="pointnumber" value={dataFromPath[2]}/>
                <input className='invis' type="text" name="latitude" value={dataFromPath[3]}/>
                <input className='invis' type="text" name="longitude" value={dataFromPath[4]}/>
                <input className='invis' type="text" name="activity_title" value={dataFromPath[0]}/>
                <label>Raadsel:</label>
                <textarea
                    required
                    rows={4}
                    cols={50}
                    name="activity_header"
                    ></textarea>

                <label>Antwoord:</label>
                <textarea
                    required
                    rows={4}
                    cols={50}
                    name="activity_awnser"
                ></textarea>

                <button type='submit'>Done</button>
            </form>

            <Background blobs={blobs}/>
        </section>
    );
}

const CreateFotoForm = () =>
{
    const [blobs, setBlobs] = useState([
        {id: 9, borderRadius: '35% 65% 68% 32% / 42% 58% 42% 58%', background: '--purple', height: '40vh', width: '40vw', lr: '-120vw', tb: '70vh', offsetLeft: '2rem', offsetTop: '2rem'},
        {id: 10, borderRadius: '82% 18% 17% 83% / 42% 58% 42% 58%', background: '--pink', height: '40vh', width: '40vw', lr: '-20vw', tb: '20vh', offsetLeft: '2.5rem', offsetTop: '0rem'},
        {id: 11, borderRadius: '42% 58% 42% 58% / 82% 18% 17% 83%', background: '--green', height: '20vh', width: '20vw', lr: '95vw', tb: '20vh', offsetLeft: '-2.5rem', offsetTop: '-1rem'},
        {id: 12, borderRadius: '81% 19% 53% 47% / 16% 58% 42% 84%', background: '--magenta', height: '60vh', width: '40vw', lr: '80vw', tb: '90vh', offsetLeft: '-2.5rem', offsetTop: '-1rem'},
    ]);

    let dataFromPath = DataHandler()
    return(
        <section className='form'>
            <form action="http://127.0.0.1:8000/api/create_checkpoint" method="POST" name="foto_form">
                <input className='invis' type="text" name="routename" value={dataFromPath[1]}/>
                <input className='invis' type="text" name="pointnumber" value={dataFromPath[2]}/>
                <input className='invis' type="text" name="latitude" value={dataFromPath[3]}/>
                <input className='invis' type="text" name="longitude" value={dataFromPath[4]}/>
                <input className='invis' type="text" name="activity_title" value={dataFromPath[0]}/>
                <input className='invis' type="text" name="activity_awnser" value={"null"}/>
                <label>Geef uitleg van de foto:</label>
                <textarea 
                    type="text" 
                    name="activity_header"
                    cols={50}
                    rows={4}
                ></textarea>
                <button type='submit'>Done</button>
            </form>

            <Background blobs={blobs}/>
        </section>
    )  
}

const DataHandler = () =>
{
    let dataArray = [];
    const pathDataArray = window.location.pathname.split("/");
    for(let i = 0; i<pathDataArray.length; i++)
    {
        let element = pathDataArray[i];
        element.toString()
        
        // voor een reden die ik niet weet werkte een normale if-statement niet
        // je kan het proberen om te veranderen maar als het niet werkt dan breekt de hele code
        // you have been warned
        switch (element)
        {
            case "create":
                break
            case "":
                break
            case "checkpoint":
                break
            default:
                dataArray.push(element)
        }
    }

    return dataArray;
}
 
export {
    CheckpointSelect,
    CreateCommentForm,
    CreateActionForm,
    CreatePuzzelForm,
    CreateFotoForm,
    CreateMultipleChoiceForm,
}