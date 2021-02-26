import { useState } from "react";
import factions from "../../../data/races";

export default function Races() {
  const [isShow, setIsShow] = useState(false);
  const toggle = () => setIsShow(!isShow);
  return (
    <div>
      <button className="show" onMouseOver={toggle}>
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
                    <img
                      src={races.image.default}
                      className="icon"
                      alt="Profession Icon"
                      title={races.name}
                    />
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        ))}
    </div>
  );
}
