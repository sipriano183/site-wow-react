import see from "../../assets/images/Spells/DetectInvisibility.png";
import invisibility from "../../assets/images/Abilities/Ambush_1.png";
import { useState } from "react";

export default function Description() {
  const [isShow, setIsShow] = useState(false);
  const toggle = () => setIsShow(true);

  return (
    <div className="introduction">
      <h2>The Game</h2>
      <button onClick={toggle}>
        {isShow ? (
          <img src={invisibility} alt="test" className="icon" />
        ) : (
          <img src={see} alt="test" className="icon" />
        )}
      </button>
    </div>
  );
}
