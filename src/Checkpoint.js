import { useState } from 'react';
import CardList from './Cards';

const CheckpointSelect = () => {
    const [cards, setCards] = useState([
        // {title: 'Puzzel', examples: ['Een raadsel', 'Multiplechoise'], imagePath: '/Images/Puzzel.png', link: '/create/checkpoint/puzzel'},
        {title: 'Comment', examples: ['Opmerking', 'Verhaal'], imagePath: '/Images/Comment.png', link: '/create/checkpoint/comment'},
        // {title: 'Picture', examples: ['Foto met beschrijving', 'Zoek locatie'], imagePath: '/Images/Picture.png', link: '/create/checkpoint/picture'},
        {title: 'Action', examples: ['Wacht * seconden', 'Doe x jumpingjacks'], imagePath: '/Images/Action.png', link: '/create/checkpoint/action'},
    ]);

    return (  
        <CardList cards={cards}/>
    );
}

const CheckpointCreate = () => {
    let path = window.location.pathname
    if(path.includes("action")) return CreateMultipleChoiceForm();
    else if (path.includes("comment")) return CreateCommentForm();
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
 
export {
    CheckpointSelect,
    CheckpointCreate,
}