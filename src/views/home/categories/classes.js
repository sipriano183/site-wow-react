import { useState } from "react";
import classes from "../../../data/classes";

export default function Classe() {
  const [isShow, setIsShow] = useState(false);

  const toggle = () => setIsShow(!isShow);

  return (
    <div className="items">
      <button className="show" onMouseOver={toggle}>
        {isShow ? "Classes" : "Classes"}
      </button>
      <ul className="subitems">
        {isShow &&
          classes.map((classes) => (
            <li>
              <img
                src={classes.image.default}
                className="icon"
                alt="Class Icon"
                title={classes.name}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
