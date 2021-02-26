import { useState } from "react";
import professions from "../../../data/professions";

export default function Profession() {
  const [isShow, setIsShow] = useState(false);
  const toggle = () => setIsShow(!isShow);

  return (
    <div className="items">
      <button className="show" onClick={toggle}>
        {isShow ? "Professions" : "Professions"}
      </button>
      <ul className="subitems">
        {isShow &&
          professions.map((professions) => (
            <li>
              <img
                src={professions.image.default}
                className="icon"
                alt="Class Icon"
                title={professions.name}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
