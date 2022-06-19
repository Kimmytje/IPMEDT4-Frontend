import { useState, useEffect } from 'react';
import {ActivityCardList} from './Cards';

import axios from 'axios';

let d;

const CheckpointSelect = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        async function getAllCards() {
          try {
            const cards = await axios.get("http://127.0.0.1:8000/api/sa") //de route van je localhost 
            
            d = cards.data;
            setCards(cards.data)
    
          } catch (error) {
            console.log(error)
          }
        }
        getAllCards()
      }, [])
      console.log(d);

    return (  
        <>
            <ActivityCardList cards={cards}/>
        </>
        
    );
}

const CreateMultipleChoiceForm = () =>
{
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
        </section>
    );
}

const CreateCommentForm = () =>
{
    let dataFromPath = DataHandler()
    return (  
        <section className='create-checkpoint'>
            <form action="http://127.0.0.1:8000/api/create_checkpoint" method="POST" name="comment_form">
                <input className='invis' type="text" name="routename" value={dataFromPath[1]}/>
                <input className='invis' type="text" name="pointnumber" value={dataFromPath[2]}/>
                <input className='invis' type="text" name="latitude" value={dataFromPath[3]}/>
                <input className='invis' type="text" name="longitude" value={dataFromPath[4]}/>
                <input className='invis' type="text" name="activity_title" value={dataFromPath[0]}/>
                <label>Comment:</label>
                <textarea 
                    type="text" 
                    name="activity_header"
                    cols={50}
                    rows={4}
                ></textarea>
                <button type = 'submit'>Done</button>
            </form>
        </section>
    );
}

const CreateActionForm = () =>
{
    let dataFromPath = DataHandler()
    return (
            <section className='create-checkpoint'>
            <form action="http://127.0.0.1:8000/api/create_checkpoint" method="POST" name="action_form">
                <input className='invis' type="text" name="routename" value={dataFromPath[1]}/>
                <input className='invis' type="text" name="pointnumber" value={dataFromPath[2]}/>
                <input className='invis' type="text" name="latitude" value={dataFromPath[3]}/>
                <input className='invis' type="text" name="longitude" value={dataFromPath[4]}/>
                <input className='invis' type="text" name="activity_title" value={dataFromPath[0]}/>
                <label>opdracht:</label>
                <textarea 
                    type="text" 
                    name="activity_header"
                    cols={50}
                    rows={4}
                ></textarea>
                <button type = 'submit'>Done</button>
            </form>
        </section>                                                      
    );
}

const CreatePuzzelForm = () =>
{
    return (  
        <section className='form'>
            <form >
                <label>Raadsel:</label>
                <textarea
                    required
                    rows={4}
                    cols={50}
                ></textarea>

                <label>Antwoord:</label>
                <textarea
                    required
                    rows={4}
                    cols={50}
                ></textarea>

                <button>Done</button>
            </form>
        </section>
    );
}

const CreateFotoForm = () =>
{
    let dataFromPath = DataHandler()
    return(
        <section className='create-checkpoint'>
            <form action="http://127.0.0.1:8000/api/create_checkpoint" method="POST" name="foto_form">
                <input className='invis' type="text" name="routename" value={dataFromPath[1]}/>
                <input className='invis' type="text" name="pointnumber" value={dataFromPath[2]}/>
                <input className='invis' type="text" name="latitude" value={dataFromPath[3]}/>
                <input className='invis' type="text" name="longitude" value={dataFromPath[4]}/>
                <input className='invis' type="text" name="activity_title" value={dataFromPath[0]}/>
                <label>Geef uitleg van de foto:</label>
                <textarea 
                    type="text" 
                    name="activity_header"
                    cols={50}
                    rows={4}
                ></textarea>
                <button type='submit'>Done</button>
            </form>
        </section>
    )  
}

const DataHandler = () =>
{
    let dataArray = new Array();
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