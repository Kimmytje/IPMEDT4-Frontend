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

    useEffect(()=>{

        const cardBackground = document.querySelectorAll('.routeCard-location');
        const Background = document.querySelectorAll('.featured');

        for (let i = 0; i < cardBackground.length; i++){
            var location = cardBackground[i].innerHTML.toLowerCase().trim().replace(/&nbsp;/g, '');;
        
            Background[i].src = "/Images/Panorama/" + location + ".jpg";
        }

    },[])

    return ( 
        <section className="routeCards">
            {cards.map((routeCard) => (
                <section className="routeCard" key={routeCard.id}>
                    <figure className="routeCard-image">
                        <img className="featured" src="https://c1.staticflickr.com/4/3935/32253842574_d3d449ab86_c.jpg" alt="Short description" />
                    </figure>

                    <section className="routeCard-header"></section>

                    <section className="routeCard-body">
                        <h3 className="routeCard-title"> {routeCard.title} </h3>
                        <p className="routeCard-location"> {routeCard.location} </p>

                        <p className="routeCard-description"> {routeCard.description} </p>
                    </section>

                    <section className="routeCard-footer">
                        <p className="routeCard-dificulty"> {routeCard.dificulty} </p>
                    </section>
                </section>
            ))}
        </section>
        
     );
}
 
export default GameCardList;
 
export {
    ActivityCardList,
    GameCardList
};