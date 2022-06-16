import { useState, useEffect } from 'react';
import ButtonList from './Buttons';

let inputValue;

const CreateRouteName = () =>
{
    const ButtonHandler = () =>
    {
        inputValue = document.getElementById("nameInput").value;
        window.location.href = `/create/${inputValue}`
    }
    return (  
        <section className='create-checkpoint'>
            <label>Vul route naam:</label>
            <input
                id='nameInput'
                type="text" 
                required
            />
            <button onClick={ButtonHandler}>Done</button>
        </section>
    );
}

export default CreateRouteName;
export{
    CreateRouteName,
    inputValue
}