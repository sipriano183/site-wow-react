import { useParams, useHistory } from "react-router-dom";
import locations from "../../data/locations";

import Locals from "../home/categories/locals";
import Races from "../home/categories/races";
import Classe from "../home/categories/classes";
import Professions from "../home/categories/professions";

import hearth from "../../assets/images/Miscellaneous/Rune_01.png";

// Aqui é feita toda a lógica de roteamento para as páginas de areas do site.
export default function Area() {
  const { area } = useParams();
  const history = useHistory();

  const current = [
    ...locations[0].sublocations,
    ...locations[1].sublocations,
  ].find(
    (loc) =>
      loc.name.toLowerCase().replace(/ /g, "") ===
      area.toLowerCase().replace(/ /g, "")
  );
  return (
    <div className="root">
      {current && (
        <div>
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
          {current.description}
        </div>
      )}
    </div>
  );
}
