import { useState } from "react";
import { useHistory } from "react-router-dom";
import professions from "../../../data/professions";

export default function Profession() {
  const [isShow, setIsShow] = useState(false);
  const history = useHistory();
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
              <button
                onClick={() =>
                  history.push(
                    "/profession/" + professions.name.replace(/ /g, "")
                  )
                }
                className="show_text"
              >
                <img
                  src={professions.image.default}
                  className="icon"
                  alt="Location Icon"
                  title={professions.name}
                />
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
