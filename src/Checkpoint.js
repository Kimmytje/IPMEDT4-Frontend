import { useState } from 'react';
import CardList from './Cards';


const CheckpointSelect = () => {
    const [cards, setCards] = useState([
        // {title: 'Puzzel', examples: ['Een raadsel', 'Multiplechoise'], imagePath: '/Images/Puzzel.png', link: '/create/checkpoint/puzzel'},
        {title: 'Comment', examples: ['Opmerking', 'Verhaal'], imagePath: '/Images/Comment.png', link: '/create/checkpoint/comment'},
        // {title: 'Picture', examples: ['Foto met beschrijving', 'Zoek locatie'], imagePath: '/Images/Picture.png', link: '/create/checkpoint/picture'},
        {title: 'Action', examples: ['Wacht * seconden', 'Doe * jumpingjacks'], imagePath: '/Images/Action.png', link: '/create/checkpoint/action'},
    ]);

    return (  
        <>
            <CardList cards={cards}/>
        </>
        
    );
}

const CheckpointCreate = () => {
    return ( 
        <>
            <section className='create-checkpoint'>
                <h2>Create checkpoint</h2>
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
        </>
    );
}
 
export {
    CheckpointSelect,
    CheckpointCreate,
}