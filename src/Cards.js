import { Link } from "react-router-dom";


const ActivityCardList = (props) => {
    const cards = props.cards;

    return (
        <section className="cards">
            {cards.map(card => (
                    <section className="card" key={card.id}>
                        <section className="card-header">
                            <figure className="card-icon">
                                <img src={card.imagePath} alt="Type of checkpoint" />
                            </figure>
                        </section>
                        
                        <Link to={card.link}>
                            <section className="card-body">
                                <h3 className="card-title">{card.title}</h3>
                                

                                <ul className="card-examples">
                                    {card.examples.map(example => (
                                        <li>{example}</li>
                                    ))}
                                </ul>
                            </section>
                        </Link>
                    </section>
            ))}
        </section>
     );
}

const GameCardList = () => {
    return ( 
        <section className="cards">

        </section>
     );
}
 
export default GameCardList;
 
export {
    ActivityCardList,
    GameCardList
};