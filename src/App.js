import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";

let d;

function App() {
  const [routes, setRoutes] = useState([])
  useEffect(() => {
    async function getAllRoutes() {
      try {
        const routes = await axios.get("http://127.0.0.1:8001/api/routes/")
        
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
    <div className="App">
      <h1>Connect React JS with Laravel</h1>
      {
        routes.map((routes, i)=>{
          return (
            <h2 key={i}>{routes.stad}</h2>
          )
        })
      }
    </div>
  );
}

export default App;
