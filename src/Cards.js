const CardList = (props) => {
    const cards = props.cards;

    return (
        <section className="card-list">
            {cards.map(button => (
                <a href={button.link}>
                    <section className="card" key={card.id}>
                        <p>{card.title}</p>
                    </section>
                </a>
            ))}
        </section>
     );
}
 
export default CardList;