import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./views/home/home";
import Teldrassil from "./views/teldrassil/teldrassil";
import {
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Area from "./views/area/Area";
import Error from "./views/error/Error";


export default function App () {

  return (<BrowserRouter>
    <Switch>
    <Route exact path="/" component={Home} />
      <Route exact path="/teldrassil" component={Teldrassil} />
      <Route exact path="/area/:area" component={Area} />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>)
}


ReactDOM.render(<App />, document.getElementById("root-react"));
