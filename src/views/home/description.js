import invisibilty from "../../assets/images/Spells/DetectInvisibility.png";
import { useState } from "react";

export default function Description() {
  const [isShow, setIsShow] = useState(false);
  const toggle = () => setIsShow(!isShow);

  return (
    <div className="introduction">
      <h2>The Game</h2>
      <button onClick={toggle}>
        <img src={invisibilty} alt="test" className="icon" />
      </button>
      
    </div>
  );
}
