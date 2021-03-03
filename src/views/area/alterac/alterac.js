import { useState } from "react";

import see from "../../../assets/images/Spells/DetectInvisibility.png";
import invisibility from "../../../assets/images/Abilities/Ambush_1.png";

export default function Description() {
  const [isShow, setIsShow] = useState(false);
  const toggle = () => setIsShow(!isShow);

  return (
    <div className="introduction">
      <h2>The Area</h2>
      <button className="show_text" onClick={toggle}>
        {isShow ? (
          <img
            src={invisibility}
            alt="test"
            title="Shadowmeld"
            className="icon"
          />
        ) : (
          <img
            src={see}
            alt="test"
            title="Detect Invisibility"
            className="icon"
          />
        )}
      </button>
      {isShow && (
        <div className="main_text">
          <h3>TBA</h3>
        </div>
      )}
    </div>
  );
}
