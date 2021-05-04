
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import './App.css'
import Home from "./Home"
import Navg from "./Navg.js"

function App() {
  return (
    <div className="App">
      <div className ="Nav">
        <Navg />
      </div>
      <Route path="/" component={Home} />
    </div>
  );
}

export default App;

