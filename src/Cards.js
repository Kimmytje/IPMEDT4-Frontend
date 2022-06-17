import { Link } from "react-router-dom";
let pathData = "";

const ActivityCardList = (props) => {
    const cards = props.cards;

    if (!window.isScriptLoaded) 
    {
        const path = window.location.pathname
        const pathArray = path.split("/")
        console.warn(pathArray)
        for(let i = 0; i<pathArray.length; i++)
        {
            if(i>3)
            {
                pathData+= `${pathArray[i]}/`
                console.warn(pathData)
            }
        }
        window.isScriptLoaded = true;
    }

    return (
        <section className="activityCards">
            {cards.map(activityCard => (
                    <section className="activityCard" key={activityCard.naam}>
                        <section className="activityCard-header">
                            <figure className="activityCard-icon">
                                <img src={`/Images/` + activityCard.naam + `.png`} alt="Type of checkpoint" />
                            </figure>
                        </section>
                        
                        <Link to={`/create/checkpoint/${activityCard.naam}/${pathData}`}>
                            <section className="activityCard-body">
                                <h3 className="activityCard-title">{activityCard.naam}</h3>
                                

                                <ul className="activityCard-examples">
                                    <li>{activityCard.beschrijving}</li>
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