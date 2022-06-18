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
        <section className='create-checkpoint'>
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
    
    return (  
        <section className='create-checkpoint'>
            <label>Comment:</label>
            <textarea
                required
                rows={4}
                cols={50}
                id="commentInput"
            ></textarea>

            <button onClick={() => DataHandler("commentInput")}>Done</button>
        </section>
    );
}

const CreateActionForm = () =>
{
    return (  
        <section className='create-checkpoint'>
            <form >
                <label>Opdracht:</label>
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

const CreatePuzzelForm = () =>
{
    return (  
        <section className='create-checkpoint'>
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
    return (  
        <section className='create-checkpoint'>
            <form >
                <label>Foto:</label>

                <button>Done</button>
            </form>
        </section>
    );
}

const DataHandler = (commentId = null, puzzleId = null, puzzleAwnserId = null) =>
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
                console.warn(element)
                dataArray.push(element)
        }
    }

    const idArray = [commentId, puzzleId, puzzleAwnserId]
    for(let i = 0; i<idArray.length; i++)
    {
        let id = idArray[i]
        if(id != null)
            dataArray.push(document.getElementById(id).value)
    }

    let pathString = "";
    for(let i = 0; i<dataArray.length; i++)
        pathString += `/${dataArray[i]}`


    window.location.href = `/linkhandler/submit_data${pathString}`;
}
 
export {
    CheckpointSelect,
    CreateCommentForm,
    CreateActionForm,
    CreatePuzzelForm,
    CreateFotoForm,
    CreateMultipleChoiceForm,
}