import { useState } from "react";

import see from "../../../assets/images/Spells/DetectInvisibility.png";
import invisibility from "../../../assets/images/Abilities/Ambush_1.png";
import teldrassil_map from "../../../assets/images/maps/classic_maps/zones/teldrassil.jpg";

export default function Description() {
  const [isShow, setIsShow] = useState(false);
  const [isShowMap, setIsShowMap] = useState(null);

  //const toggle = () => setIsShow(!isShow);

   function toggle() {
    setIsShow(!isShow)
    setIsShowMap(false)
  }

  function toggleMap() {
    setIsShowMap(!isShowMap);
  }
    
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
      {console.log(isShow)}
      {console.log(isShowMap)}
      {isShow && (
        <div className="main_text">
          <h3>Description</h3>
          <p>
            The World Tree, Teldrassil, is the starting area for the Night Elf
            race. It was grown by the druids of the Cenarion Circle during
            Malfurion Stormrage's absence, between the events of The Frozen
            Throne and World of Warcraft. On top of it, the Night Elven capital
            of Darnassus shines as the heart of the Kaldorei civilization.
          </p>
          <h3>Geography</h3>
          <p>
            Since Teldrassil is a giant tree, it's geography is mostly made by
            dense forests. The terrain is mostly even but it has some hills
            around Dolanaar and caves all around. It has three main areas for
            exploring and questing:
          </p>
            <ul>
              <li>
                {" "}
                - Shadowglen: Where new Night Elves are trained. Aldrassil is
                here and it houses vendors and trainers for the classes
                available to the Elves.
              </li>
              <li>
                {" "}
                - Dolanaar: A small town located in the middle of Teldrassil, it
                has an Inn, vendors class trainers and profession trainers. The
                main quest hub for the area
              </li>
              <li>
                {" "}
                - The Oracle Glade: Another quest hub, the final quests for the
                area are set around here.
              </li>
            </ul>
          
          <p>
            It has a main road winding through the whole zone, this road is
            mostly safe for travelling without facing any enemies. Teldrassil
            does not have any dungeons, raids or battleground instances.
          </p>
          <p>
            At the bottom of Teldrassil lies Rut'theran Village, the main harbor
            for the island, connecting it to the mainland through boats and an
            hippogryph rider. Some quests leading to Darkshore start there.
          </p>
          <button className="show_text" onClick={toggleMap}>
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
          {isShowMap && <img
              src={teldrassil_map}
              alt="Teldrassil Map"
              title="Map of Teldrassil"
              className="map"
            />}
        </div>
      )}
    </div>
  );
}
