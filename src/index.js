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

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/teldrassil" component={Teldrassil} />
        </Switch>{" "}
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
