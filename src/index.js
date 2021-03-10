/* Importação padrão para funcionamento do código, incluindo a documentação react e react-router*/

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./views/home/home";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Area from "./views/area/Area";
import Error from "./views/error/Error";
import Race from "./views/race/race";
import Classe from "./views/classe/classe";
import Profession from "./views/profession/profession";

/*É necessário exportar a função App como default para o método ReactDOM.render para renderizar a página */
export default function App() {
  /*Todo as rotas do site são configuradas por essa lógica aqui, a rota padrão tem como seu componente a função Home, outras são dadas por páginas padrão que recebem a lógica para renderização  */
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/area/:area" component={Area} />
        <Route exact path="/race/:race" component={Race} />
        <Route exact path="/classe/:classe" component={Classe} />
        <Route exact path="/profession/:profession" component={Profession} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root-react"));
