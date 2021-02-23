import { useState } from "react";
import locations from "../../../data/locations";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Teldrassil from "../../pages/teldrassil";

export default function Locals() {
  const [isShow, setIsShow] = useState(false);
  const toggle = () => setIsShow(!isShow);
  return (
    <ul>
      <button className="show" onMouseOver={toggle}>
        {isShow ? "Areas" : "Areas"}
      </button>
      {isShow &&
        locations.map((location) => (
          <ul key={location.id}>
            <li>
              {location.name}
              <ul className="subitems">
                {location.sublocations.map((sublocation) => (
                  <li key={sublocation.id}>
                    <Router>
                      <Link to="/teldrassil">{sublocation.name}</Link>
                    </Router>
                    <Switch>
                      <Route path="/teldrassil">
                        <Teldrassil />
                      </Route>
                      <Route path="/">
                        <Locals />
                      </Route>
                    </Switch>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        ))}
    </ul>
  );
}
