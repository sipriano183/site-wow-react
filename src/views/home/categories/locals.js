import { useState } from "react";
import locations from "../../../data/locations";

export default function Locals() {

  const [isShow, setIsShow] = useState(false)
  const toggle = () => setIsShow(!isShow)
  return (
    <ul>
      <button className="show" onMouseOver={toggle}>{isShow ? 'Areas' : 'Areas'}</button>
      {isShow && locations.map((location) => (
        <ul key={location.id}>
          <li>
            {location.name}
            <ul class="kalimdor_zone">
              {location.sublocations.map((sublocation) => (
                <li key={sublocation.id}>{sublocation.name}</li>
              ))}
            </ul>
          </li>
        </ul>
      ))}
    </ul>
  );
}
