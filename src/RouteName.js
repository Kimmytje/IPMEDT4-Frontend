let inputValue;

const CreateRouteName = () => {
    const ButtonHandler = () =>
    {
        inputValue = document.getElementById("nameInput").value;
        window.location.href = `/create/${inputValue}/0`
    }

    return (  
        <article className='name'>
            <form className="form" action="http://127.0.0.1:8000/api/create_route" method="POST" name="route_form">
                <label>Geef je route een naam!</label>
                <input
                    id='nameInput'
                    type="text"
                    name="routename"
                    required
                />
                <label>Wat is de regio of stad van de route?</label>
                <input
                    type="text"
                    name="regio"
                    required
                />
                <button type='submit'>Done</button>
            </form>
        </article>
    );
}

export default CreateRouteName;
export{
    CreateRouteName,
    inputValue
}