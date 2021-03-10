import see from "../../assets/images/Spells/DetectInvisibility.png";
import invisibility from "../../assets/images/Abilities/Ambush_1.png";

import { useState } from "react";

export default function Description() {

  const [isShow, setIsShow] = useState(false);
  const toggle = () => setIsShow(!isShow);

  return (
    <div className="introduction">
      <h2>The Game</h2>
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
          <h3>Summary</h3>
          <p>
            World of Warcraft is an MMORPG game set in the world of Azeroth,
            where you can choose between The Alliance and The Horde and explore
            the world, doing quests, finding treasures in dungeons and leveling
            different professions.
          </p>
          <h3>Factions and Races</h3>
          <p>
            Each faction has access to four races, with each having their own
            culture, areas and towns to explore. Each area is different from one
            another and you can freely explore the world as you advance in
            levels. The players can socialize with members of their own faction,
            but interactions with the opposing faction are very restricted.{" "}
          </p>
          <p>
            Each race has its own racial abilities and stats, making them
            different from each other not only in appearance but in gameplay.
            For example, an Orc deals more damage when using an Axe, while a
            Night Elf is more elusive and is harder to discover when in Stealth.
          </p>
          <h3>Classes</h3>
          <p>
            Each race has its own specific classes to choose from. A Tauren
            cannot be a Paladin for example, just like a Human cannot be a
            Shaman. This makes the player choose not only a race not only for
            aesthetic reasons but also for gameplay reasons. The races' Racial
            Abilities also tie-in with the Classes they're able to be, for
            maximizing stats and options.
          </p>
          <h3>Areas</h3>
          <p>
            When wandering the world, a player can be in a lush forest and,
            after a little while, be in a great desert or in a giant swamp. Each
            area has mysteries to solve, fauna and flora to see and quests to
            do. The game also has a number of different towns, both big and
            small, each with their own utility to the player.
          </p>
          <h3>Professions</h3>
          <p>
            The player has access to twelve different professions, a player can
            choose two primary professions and three secondary ones. Each one
            has different styles and uses different materials. With them you can
            craft stronger gear, enchant weapons, create potions and, of course,
            make money through the Auction House.
          </p>
          <h3>Player vs Player</h3>
          <p>
            World of Warcraft has a complex Player Vs Player system, with
            Battlegrounds, Arenas, rankings and gear specific for PvP. A
            battleground can have up to forty players fighting at the same time,
            while an Arena is smaller, supporting teams of 2 or 3 players. A
            player can also fight freely on the World, without joining
            Battlegrounds or Arenas, earning Honor for each kill. Honor is used
            to level up in Rank and buy PvP gear.
          </p>
        </div>
      )}
    </div>
  );
}
