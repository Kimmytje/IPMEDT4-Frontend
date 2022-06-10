import { useState, useEffect } from "react";
import axios from "axios";
import Home from './Home';
import {CheckpointSelect, CheckpointCreate} from './Checkpoint';
import {Create, CreateWalk, CreateNow} from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

let d;

function App() {
  const [routes, setRoutes] = useState([])
  useEffect(() => {
    async function getAllRoutes() {
      try {
        const routes = await axios.get("http://127.0.0.1:8001/api/routes/") //de route van je localhost 
        
        d = routes.data;
        setRoutes(routes.data)

      } catch (error) {
        console.log(error)
      }
    }
    getAllRoutes()
  }, [])
  console.log(d);
  return (
    <>
      <section className="App">
        <h1>Connect React JS with Laravel</h1>
        {routes.map((routes, i) => {
          return (
            <h2 key={i}>{routes.stad}</h2>
          );
        })}
      </section>
    
      <Router>
        <section className="App">
          {/* <Navbar/> */}
          <section className="content">
            <Switch>
              <Route exact path="/">
                {/* <Navbar/> */}
                <Home />
              </Route>

              <Route exact path="/create">
                <Create />
              </Route>

                <Route exact path="/create/now">
                  <CreateNow />
                </Route>

                <Route exact path="/create/walk">
                  <CreateWalk />
                </Route>

                  <Route exact path="/create/checkpoint">
                    <CheckpointSelect />
                  </Route>

                  <Route path="/create/checkpoint/">
                    <CheckpointCreate />
                  </Route>

              {/* <Route path="/play">
                <Play/>
              </Route> */}

            </Switch>
          </section>
        </section>
      </Router>
      
    </>
  );
}

export default App;
