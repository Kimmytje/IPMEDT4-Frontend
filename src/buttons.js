const ButtonList = (props) => {
    const buttons = props.buttons;
    const title = props.title;

    return (
        <section className="button-list">
            <h2>{ title }</h2>
            {buttons.map(button => (
            <section className="button" key={button.id}>
                <a href={button.link}>{button.title}</a>
            </section>
            ))}
        </section>
     );
}
 
export default ButtonList;