const CardList = (props) => {
    const cards = props.cards;

    return (
        <section className="cards">
            {cards.map(card => (
                    <section className="card" key={card.id}>
                        <section className="card-header">
                            <figure className="card-icon">
                                <img src="" alt="Type of checkpoint" />
                            </figure>
                        </section>
                        
                        <a href={card.link}>
                            <section className="card-body">
                                <h3 className="card-title">{card.title}</h3>
                                

                                <ul className="card-examples">
                                    <li>Test</li>
                                </ul>
                            </section>
                        </a>
                    </section>
            ))}
        </section>
     );
}
 
export default CardList;