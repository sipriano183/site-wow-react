import { useState } from "react";
import factions from "../../../data/races";

export default function Races() {

  const [isShow, setIsShow] = useState(false)
  const toggle = () => setIsShow(!isShow)
  return (
    <ul>
      <button className="show" onMouseOver={toggle}>{isShow ? 'Races' : 'Races'}</button>
      {isShow && factions.map((faction) => (
        <ul key={faction.id}>
          <li>
            {faction.name}
            <ul class="races">
              {faction.races.map((races) => (
                <li key={races.id}>{races.name}</li>
              ))}
            </ul>
          </li>
        </ul>
      ))}
    </ul>
  );
}

