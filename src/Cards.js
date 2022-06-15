import { Link } from "react-router-dom";
import { useEffect } from "react";


const ActivityCardList = (props) => {
    const cards = props.cards;

    return (
        <section className="activityCards">
            {cards.map(activityCard => (
                    <section className="activityCard" key={activityCard.id}>
                        <section className="activityCard-header">
                            <figure className="activityCard-icon">
                                <img src={activityCard.imagePath} alt="Type of checkpoint" />
                            </figure>
                        </section>
                        
                        <Link to={activityCard.link}>
                            <section className="activityCard-body">
                                <h3 className="activityCard-title">{activityCard.title}</h3>
                                

                                <ul className="activityCard-examples">
                                    {activityCard.examples.map(example => (
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

const GameCardList = (props) => {
    const cards = props.cards;

    return ( 
        <section className="routeCards">
            {cards.map((routeCard) => (
                <section className="routeCard" key={routeCard.routenummer}>
                    <figure className="routeCard-image">
                        <img className="featured" src={`/Images/Panorama/` + routeCard.stad.toLowerCase() + `.jpg`} alt="Short description" />
                    </figure>

                    <section className="routeCard-header"></section>

                    <section className="routeCard-body">
                        <h3 className="routeCard-title"> {routeCard.beginpunt} </h3>
                        <p className="routeCard-location"> {routeCard.stad} </p>

                        <p className="routeCard-description"> </p>
                    </section>

                    <section className="routeCard-footer">
                        <p className="routeCard-dificulty"> {routeCard.moeilijkheidsniveau} </p>
                    </section>
                </section>
            ))}
        </section>
        
     );
}
  
export {
    ActivityCardList,
    GameCardList
};