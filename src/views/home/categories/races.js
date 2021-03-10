import { useState } from "react";
import { useHistory } from "react-router-dom";
import factions from "../../../data/races";

export default function Races() {
  const [isShow, setIsShow] = useState(false);
  const toggle = () => setIsShow(!isShow);
  const history = useHistory();
  return (
    <div>
      <button className="show" onClick={toggle}>
        {isShow ? "Races" : "Races"}
      </button>
      {isShow &&
        factions.map((faction) => (
          <ul key={faction.id} className="items">
            <li>
              {faction.name}
              <ul className="subitems">
                {faction.races.map((races) => (
                  <li key={races.id}>
                    <button
                      onClick={() =>
                        history.push(
                          "/race/" + races.name.replace(/ /g, "")
                        )
                      }
                      className="show_text"
                    >
                      <img
                        src={races.image.default}
                        className="icon"
                        alt="Location Icon"
                        title={races.name}
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        ))}
    </div>
  );
}
