const ButtonList = (props) => {
    const buttons = props.buttons;
    const title = props.title;

    return (
        <section className="button-list">
            <h2>{ title }</h2>
            {buttons.map(button => (
                <a href={button.link}>
                    <section className="button" key={button.id}>
                        <p>{button.title}</p>
                    </section>
                </a>
            ))}
        </section>
     );
}
 
export default ButtonList;