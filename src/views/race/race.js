import { useParams, useHistory } from "react-router-dom";

import Locals from "../home/categories/locals";
import Races from "../home/categories/races";
import Classe from "../home/categories/classes";
import Professions from "../home/categories/professions";

import hearth from "../../assets/images/Miscellaneous/Rune_01.png";
import factions from "../../data/races";

export default function Race() {
  const { race } = useParams();
  const history = useHistory();

  const current = [
    ...factions[0].races,
    ...factions[1].races,
  ].find(
    (rac) =>
      rac.name.toLowerCase().replace(/ /g, "") ===
      race.toLowerCase().replace(/ /g, "")
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
          <footer className="main_footer">
            <p>All rights reserved by Blizzard Entertainment.</p>
          </footer>
        </div>
      )}
    </div>
  );
}
