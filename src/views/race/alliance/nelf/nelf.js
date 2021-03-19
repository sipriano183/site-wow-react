import { useState } from "react";

import see from "../../../../assets/images/Spells/DetectInvisibility.png";
import invisibility from "../../../../assets/images/Abilities/Ambush_1.png";
import wisp from "../../../../assets/images/Spells/WispSplode.png";
import quickness from "../../../../assets/images/Abilities/ShadowMeld.png";
import nature from "../../../../assets/images/Spells/SpiritArmor.png";

import styles from "./nelf.module.css";

export default function Human() {
  const [isShow, setIsShow] = useState(false);

  function toggle() {
    setIsShow(!isShow);
  }

  return (
    <div className="introduction">
      <h2>The Night Elves</h2>
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
      {isShow && (
        <div className="main_text">
          <h3>Description</h3>
          <p>
            The Night Elves are an ancient race that fought the Burning Legion
            ten thousand years ago. After the Third War left their society weak,
            mortal and drained of resources, they decided to join the Alliance
            and find themselves a new place in this world. The Night Elven lands
            are on the continent of Kalimdor and they are the main Alliance
            force on the continent.
          </p>
          <p>
            Their leader is the High Priestess Tyrande Whisperwind, who rules
            from the Temple of the Moon at their Capital, Darnassus. She
            oversees the elvish society and protects them while the Archdruid
            Malfurion Stormrage has not returned from the Emerald Dream.
          </p>
          <h3>Racial Abilities</h3>
          <p>
            Their main Racial Ability is{" "}
            <img
              src={invisibility}
              alt="icon"
              title="Shadowmeld"
              className={styles.spellIcon}
            />
            <strong className={styles.spellText}>[Shadowmeld]</strong> which
            makes them invisible while they are not moving and decreasing the
            chances for them to be detected while stealthed. This works great
            with PvP and also resets Aggro, making them useful choices for
            Battlegrounds or Raiding.
          </p>
          <p>
            They can also turn into a{" "}
            <img
              src={wisp}
              alt="icon"
              title="Wisp Spirit"
              className={styles.spellIcon}
            />{" "}
            <strong className={styles.spellText}>[Wisp Spirit]</strong>,
            increasing Movement Speed upon death by 50%. Their{" "}
            <img
              src={quickness}
              alt="Icon"
              title="Quickness"
              className={styles.spellIcon}
            />
            <strong className={styles.spellText}>[Quickness]</strong> increases
            Dodge chance by 1% and their{" "}
            <img
              src={nature}
              alt="Icon"
              title="Nature Resistance"
              className={styles.spellIcon}
            />
            <strong className={styles.spellText}>[Nature Resistance]</strong>{" "}
            increases their defenses to Nature spells by 10.
          </p>
          <h3>Classes and Resources</h3>
          <p>
            Elves can be <span className={styles.c1}>Warriors</span>,{" "}
            <span className={styles.c4}>Rogues</span>,
            <span className={styles.c3}>Hunters</span>,{" "}
            <span className={styles.c5}>Priests</span> and{" "}
            <span className={styles.c11}>Druids</span>. They are one of the two
            races that can be druids (the others being Tauren).
          </p>
          <p>
            They are the best choice for any agility-driven class, since Elves
            gain more agility than most of the in-game races. Druids and Rogues
            are also a great choice thanks to their Racial, which buffs their
            invisibility and makes it harder for other races to see them while
            stealthed.
          </p>
          <p>
            They can learn any Profession, as with any classes. But their
            strating zone, Teldrassil, has no ore veins and they also have no
            Mining, Blacksmithing and Engineering trainers. They can acess those
            trainers from other Capitals or from Auberdine, their main city on
            Darkshore, after level 10. On the other side, Teldrassil has many
            herbs to collect and beasts to skin, making it easier for
            Herbalists/Alchemists and Skinners/Leatherworkers.
          </p>
          <h3>Faction Mounts</h3>
          <p>
            Their mounts are Nightsabers. They can be purchased from a Saber
            Handler in their capital, Darnassus, at any reputation level. For
            other classes it is necessary to reach Exalted with Darnassus to
            purchase them.
          </p>
          <h3>Main Zones and Quests</h3>
          <p>
            The main zones for the Elves are Teldrassil, Darkshore, Ashenvale,
            Felwood, Feralas and Winterspring. The first two are Alliance
            Territory and they are mostly safe for leveling, exploring and
            farming materials, while the rest are contested and see heavy Horde
            traffic sometimes. Moonglade is also a very important zone for them,
            but it is not made for leveling, as it is a druid hub and has mostly
            quests associated for them, but still, Night Elves are featured
            heavily in the area. All of those areas are wild and feature a lot
            of fauna and flora, with Night Elven towns being open and sometimes
            intermingled with Nature itself, reflecting the Elvish love of
            Nature and wilderness
          </p>
          <p>
            Elvish quests are usually about fighting corruption of Nature in a
            certain area, dealing with their newfound mortality or fighting
            against Horde invasions on their territory. There is little Night
            Elven presence outside of Kalimdor.
          </p>
        </div>
      )}
    </div>
  );
}
