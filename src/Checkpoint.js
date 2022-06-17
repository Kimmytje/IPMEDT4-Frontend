import axios from 'axios';
import { Component, useState } from 'react';
import {ActivityCardList} from './Cards';

class Checkpoint extends Component {

    state = {
        comment: ''
    }

    handleInput = (e) => {
        this.setState({
            [e.target.comment]: e.target.value
        });
    }

    saveComment = async (e) => {
        e.preventDefault();

        const res = await axios.post('http://127.0.0.1:8001/api/add-comment', this.state);
        if(res.data.status === 200)
        {
            console.log(res.data.message);
            this.setState({
                comment: ''
            });
        }
    }

    render() {
        return(
        <section className='create-checkpoint'>
            <form onSubmit={this.saveComment} method="post">
                <label>Comment:</label>
                <textarea
                    required
                    name='comment'
                    onChange={this.handleInput}
                    rows={4}
                    cols={50}
                ></textarea>

                <button>Done</button>
            </form>
        </section>)
        
    }

}


const CheckpointSelect = () => {
    const [cards, setCards] = useState([
        // {title: 'Puzzel', examples: ['Een raadsel', 'Multiplechoise'], imagePath: '/Images/Puzzel.png', link: '/create/checkpoint/puzzel'},
        {title: 'Comment', examples: ['Opmerking', 'Verhaal'], imagePath: '/Images/Comment.png', link: '/create/checkpoint/comment'},
        // {title: 'Picture', examples: ['Foto met beschrijving', 'Zoek locatie'], imagePath: '/Images/Picture.png', link: '/create/checkpoint/picture'},
        {title: 'Action', examples: ['Wacht * seconden', 'Doe * jumpingjacks'], imagePath: '/Images/Action.png', link: '/create/checkpoint/action'},
    ]);

    return (  
        <>
            <ActivityCardList cards={cards}/>
        </>
        
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
        <Checkpoint />
    );
}
 
export {
    CheckpointSelect,
    CheckpointCreate,
}

export default Checkpoint;
