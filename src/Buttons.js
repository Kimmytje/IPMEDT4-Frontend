import { Link } from "react-router-dom";

const ButtonList = (props) => {
    const buttons = props.buttons;
    const title = props.title;

    return (
        <section className="button-list">
            <h2>{ title }</h2>
            {buttons.map((button) => (
                <Link to={button.link}  key={button.title}>
                    <section className="btn-primary">
                        <p>{button.title}</p>
                    </section>
                </Link>
            ))}
        </section>
     );
}
 
export default ButtonList;