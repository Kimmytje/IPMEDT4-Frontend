const CardList = (props) => {
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
                        
                        <a href={card.link}>
                            <section className="card-body">
                                <h3 className="card-title">{card.title}</h3>
                                

                                <ul className="card-examples">
                                    {card.examples.map(example => (
                                        <li>{example}</li>
                                    ))}
                                </ul>
                            </section>
                        </a>
                    </section>
            ))}
        </section>
     );
}
 
export default CardList;