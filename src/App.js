import Navbar from './Navbar';
import Home from './Home';
import Checkpoint from './Checkpoint';
import {Create, CreateWalk, CreateNow} from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  // const title = 'Welcome to our app!';

  return (
    <Router>
      <section className="App">
        {/* <Navbar/> */}
        <section className="content">
          <Switch>
            <Route exact path="/">
              {/* <Navbar/> */}
              <Home/>
            </Route>

            <Route exact path="/create">
              <Create/>
            </Route>

              <Route exact path="/create/now">
                <CreateNow/>
              </Route>

              <Route exact path="/create/walk">
                <CreateWalk/>
              </Route>

                <Route exact path="/create/checkpoint">
                  <Checkpoint/>
                </Route>

            {/* <Route path="/play">
              <Play/>
            </Route> */}

          </Switch>
        </section>
      </section>
    </Router>
    
  );
}

export default App;
