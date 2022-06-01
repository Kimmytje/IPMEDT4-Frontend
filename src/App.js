import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
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
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
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
