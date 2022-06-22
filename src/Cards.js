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
                                <img src={`/Images/${activityCard.naam}.png`} alt="Type of checkpoint" />
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
                <Link to={`/game/${routeCard.routename}/0`} key={routeCard.routename}>
                    <section className="routeCard">
                        <figure className="routeCard-image">
                            <img className="featured" src={`/Images/Panorama/${routeCard.regio.toLowerCase()}.jpg`} alt=""/>
                        </figure>

                        <section className="routeCard-header"></section>

                        <section className="routeCard-body">
                            <h3 className="routeCard-title"> {routeCard.routename} </h3>
                            <p className="routeCard-location"> {routeCard.regio} </p>
                        </section>
                    </section>
                </Link>
            ))}
        </section>
        
     );
}
  
export {
    ActivityCardList,
    GameCardList
};