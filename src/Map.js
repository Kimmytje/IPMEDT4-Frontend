import PlaceholderMapWalk from './Images/placeholder_map_walk.jfif';
import PlaceholderMapNow from './Images/placeholder_map_now.jpg';

// Temporary
import { Route, Switch } from 'react-router-dom';


const Map = () => {

    return (
        <Switch>
            <Route exact path="/create/now">
                <figure className="map">
                    <img src={PlaceholderMapNow} alt="Map" />
                </figure> 
            </Route>

            <Route exact path="/create/walk">
                <figure className="map">
                    <img src={PlaceholderMapWalk} alt="Map" />
                </figure>
            </Route>
        </Switch>
        
        
    );  
}

export default Map;