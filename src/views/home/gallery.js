import see from "../../assets/images/Spells/DetectInvisibility.png";
import invisibility from "../../assets/images/Abilities/Ambush_1.png";

import { useState } from "react";

export default function Gallery() {
  const [isShow, setIsShow] = useState(false);
  const toggle = () => setIsShow(!isShow);

  return (
    <div className="gallery">
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
    </div>
  );
}
