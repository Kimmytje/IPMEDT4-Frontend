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
    return (  
        <section className='form'>
            <form >
                <label>Comment:</label>
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

const CreateActionForm = () =>
{
    return (  
        <section className='form'>
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
    return (  
        <section className='form'>
            <form >
                <label>Foto:</label>

                <button>Done</button>
            </form>
        </section>
    );
}
 
export {
    CheckpointSelect,
    CreateCommentForm,
    CreateActionForm,
    CreatePuzzelForm,
    CreateFotoForm,
    CreateMultipleChoiceForm,
}