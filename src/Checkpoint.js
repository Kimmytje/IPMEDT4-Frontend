import { useState } from 'react';
import CardList from './Cards';

const CheckpointSelect = () => {
    const [cards, setCards] = useState([
        {title: 'Puzzel', link: '/create/checkpoint/puzzel',},
        {title: 'Comment', link: '/create/checkpoint/comment'},
        {title: 'Image', link: '/create/checkpoint/image'},
        {title: 'Action', link: '/create/checkpoint/action'},
    ]);

    return (  
        <CardList cards={cards}/>
    );
}

const CheckpointCreate = () => {
    return (  
        <p>hi</p>
    );
}
 
export {
    CheckpointSelect,
    CheckpointCreate,
}