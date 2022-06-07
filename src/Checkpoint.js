import { useState } from 'react';
import CardList from './Cards';

const CheckpointSelect = () => {
    const [cards, setCards] = useState([
        {title: 'Puzzel', examples: ['Een raadsel', 'Multiplechoise'], imagePath: '/Images/Puzzel.png', link: '/create/checkpoint/puzzel'},
        {title: 'Comment', examples: ['Opmerking', 'Verhaal'], imagePath: '/Images/Comment.png', link: '/create/checkpoint/comment'},
        {title: 'Picture', examples: ['Foto met beschrijving', 'Zoek locatie'], imagePath: '/Images/Picture.png', link: '/create/checkpoint/picture'},
        {title: 'Action', examples: ['Wacht * seconden', 'Doe x jumpingjacks'], imagePath: '/Images/Action.png', link: '/create/checkpoint/action'},
    ]);

    return (  
        <CardList cards={cards}/>
    );
}

const CheckpointCreate = () => {
    return (  
        <form action="">
            <label>
                What your name
                <textarea name="name" id="name" cols="30" rows="10"></textarea>
            </label>

            <input type="submit" value="Submit"/>
        </form>
    );
}
 
export {
    CheckpointSelect,
    CheckpointCreate,
}