import { useState } from "react";
import professions from "../../../data/professions";

export default function Profession() {

  const [isShow, setIsShow] = useState(false)
  const toggle = () => setIsShow(!isShow)
  return (
    <ul>
      <button className="show" onMouseOver={toggle}>{isShow ? 'Professions' : 'Professions'}</button>
      {isShow && professions.map((professions) => (
        <ul class="professions" key={professions.id}>
          <li>
            <img src={professions.image.default} className="profession_icon" alt="Profession Icon" /> -
            - {professions.name}
          </li>
        </ul>
      ))}
    </ul>
  );
}
