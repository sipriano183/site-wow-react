import Locals from "./categories/locals";
import Races from "./categories/races";
import Classe from "./categories/classes";
import Professions from "./categories/professions";
import Description from "./description";

import hearth from "../../assets/images/Miscellaneous/Rune_01.png";

import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  // Essa é a renderização padrão da página principal, vinculada ao Index. Toda a composição da página principal é dada através da importação de funções, deixando o código mais limpo
  return (
    <div className="root">
      <header className="main_header">
        <button onClick={() => history.push("/")} className="hearth">
          <img
            src={hearth}
            alt="test"
            className="hearth_icon"
            title="Back to the Inn"
          />
        </button>
        <h1>World of Warcraft - Classic</h1>
        <h2>Basics of World of Warcraft explained</h2>
        <nav className="site_nav">
          <Locals />
          <Races />
          <Classe />
          <Professions />
        </nav>
      </header>
      <Description />
      <footer className="main_footer">
        <p>All rights reserved by Blizzard Entertainment.</p>
      </footer>
    </div>
  );
}
