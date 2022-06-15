import { useState, useEffect } from "react";
import axios from "axios";

import Home from './Home';
import Back from './Back';

import {Create, CreateWalk, CreateNow} from './Create';
import {CheckpointSelect, CreateCommentForm, CreatePuzzelForm, CreateActionForm, CreateFotoForm} from './Checkpoint';

import Play from './Play';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

let d;

function App() {
  const [routes, setRoutes] = useState([])
  useEffect(() => {
    async function getAllRoutes() {
      try {
        const routes = await axios.get("http://127.0.0.1:8000/api/") //de route van je localhost 
        
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
      <Router>
        <article className="App">
          {/* <Navbar/> */}
          <section className="content">
            <Switch>
              <Route exact path="/">
                {/* <Navbar/> */}
                <Home />
              </Route>

              <Route exact path="/create">
                <Back/>

                <Create />
              </Route>

                <Route exact path="/create/now">
                  <Back/>

                  <CreateNow />
                </Route>

                <Route exact path="/create/walk">
                  <Back/>

                  <CreateWalk />
                </Route>

                  <Route exact path="/create/checkpoint">
                    <Back/>
  
                    <CheckpointSelect />
                  </Route>

                    <Route path="/create/checkpoint/opdracht">
                      <Back/>
      
                      <CreateActionForm />
                    </Route>

                    <Route path="/create/checkpoint/commentaar">
                      <Back/>
      
                      <CreateCommentForm />
                    </Route>

                    <Route path="/create/checkpoint/foto">
                      <Back/>
      
                      <CreateFotoForm />
                    </Route>

                    <Route path="/create/checkpoint/puzzel">
                      <Back/>
      
                      <CreatePuzzelForm />
                    </Route>

              <Route path="/play">
                <Back/>
      
                <Play/>
              </Route>

            </Switch>
          </section>
        </article>
      </Router>
      
    </>
  );
}

export default App;
