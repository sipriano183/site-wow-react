import { useState } from "react";
import classes from "../../../data/classes";

export default function Classe() {
  const [isShow, setIsShow] = useState(false)

  const toggle = () => setIsShow(!isShow)

  return (
    <ul>
      <button className="show" onMouseOver={toggle}>{isShow ? 'Classes' : 'Classes'}</button>
      {isShow && classes.map((classes) => (
        <ul class="classes" key={classes.id}>
          <li>{classes.name}</li>
        </ul>
      ))}
    </ul>
  );
}
