let inputValue;

const CreateRouteName = () =>
{
    const ButtonHandler = () =>
    {
        inputValue = document.getElementById("nameInput").value;
        window.location.href = `/create/${inputValue}`
    }
    return (  
        <article className='name'>
            <section className='form'>
                <label>Vul route naam:</label>
                <input
                    id='nameInput'
                    type="text" 
                    required
                />
                <button onClick={ButtonHandler}>Done</button>
            </section>
        </article>
    );
}

export default CreateRouteName;
export{
    CreateRouteName,
    inputValue
}