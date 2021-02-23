import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./views/home/home";
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {
  render() {
    return <Home />;
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
