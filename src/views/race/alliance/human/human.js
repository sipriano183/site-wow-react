import { useState } from "react";

import see from "../../../../assets/images/Spells/DetectInvisibility.png";
import invisibility from "../../../../assets/images/Abilities/Ambush_1.png";

export default function Human() {
  const [isShow, setIsShow] = useState(false);
  const [isShowMap, setIsShowMap] = useState(null);

  function toggle() {
    setIsShow(!isShow);
    setIsShowMap(false);
  }

  function toggleMap() {
    setIsShowMap(!isShowMap);
  }

  return (
    <div className="introduction">
      <h2>The Human Race</h2>
      <button className="show_text" onClick={toggle}>
        {isShow ? (
          <img
            src={invisibility}
            alt="test"
            title="Shadowmeld"
            className="text_icon"
          />
        ) : (
          <img
            src={see}
            alt="test"
            title="Detect Invisibility"
            className="text_icon"
          />
        )}
      </button>
      {isShow && 
        <div className="main_text">
          <h3>Description</h3>
          
          
        </div>
      }
    </div>
  );
}
