import { useState } from "react";
import locations from "../../../data/locations";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Locals() {
  const [isShow, setIsShow] = useState(false);
  const toggle = () => setIsShow(!isShow);
  return (
    <div>
      <button className="show" onMouseOver={toggle}>
        {isShow ? "Areas" : "Areas"}
      </button>
      {isShow &&
        locations.map((location) => (
          <ul key={location.id} className="items">
            <li>{location.name}</li>
            <ul className="subitems">
              {location.sublocations.map((sublocation) => (
                <li key={sublocation.id}>
                  <img
                    src={sublocation.image.default}
                    className="icon"
                    alt="Location Icon"
                    title={sublocation.name}
                  />
                </li>
              ))}
            </ul>
          </ul>
        ))}
    </div>
  );
}
