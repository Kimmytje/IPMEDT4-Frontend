import Home from './Home';

import Back from './Back';

import {Create, CreateWalk, CreateNow} from './Create';
import {LngLatAdder, LngLatGetter} from './LinksHandler';
import CreateRouteName from './RouteName';
import NotFound from './404';
import {CheckpointSelect, CreateCommentForm, CreatePuzzelForm, CreateActionForm, CreateFotoForm} from './Checkpoint';

import Play from './Play';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <>   
      <Router>
        <article className="App">
          {/* <Navbar/> */}
          <section className="content">
            <Switch>
            {/*======= Home ====== */}
              <Route exact path="/">
                {/* <Navbar/> */}
                <Home />
              </Route>

            {/*======= Playable routes ====== */}
              <Route path="/play">
                  <Back/>
        
                  <Play/>
                </Route>

            {/*======= Name for route ====== */}
              <Route exact path="/name">
                <Back/>

                <CreateRouteName />
              </Route>

            {/*======= Create a route ====== */}
              <Route path="/create/">
                  <Back/>

                  <Create />
                </Route>

            {/*======= Create route Map ====== */}
              <Route path="/create/now/">
                <Back/>

                <CreateNow />
              </Route>

              <Route path="/create/walk/">
                <Back/>

                <CreateWalk />
              </Route>

            {/*======= Type of Checkpoint select ====== */}
              <Route path="/create/checkpoint/select/">
                <Back/>
  
                <CheckpointSelect />
              </Route>

              <Route path="/create/checkpoint/opdracht/">
                <Back/>

                <CreateActionForm />
              </Route>

              <Route path="/create/checkpoint/commentaar/">
                <Back/>

                <CreateCommentForm />
              </Route>

              <Route path="/create/checkpoint/foto/">
                <Back/>

                <CreateFotoForm />
              </Route>

              <Route path="/create/checkpoint/puzzel/">
                <Back/>

                <CreatePuzzelForm />
              </Route>

            {/*======= Background shit ====== */}
              <Route exact path="/linkhandler">
                <LngLatAdder />
              </Route>

              <Route exact path="/linkhandler/onlocation">
                <LngLatGetter />
              </Route>

            {/*======= 404 (please keep at the end) ====== */}
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </section>
        </article>
      </Router>
      
    </>
  );
}

export default App;
