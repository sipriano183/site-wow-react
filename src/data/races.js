/* Esses arrays de objetos receberão os parâmetros para todos os links do Header do site */

import Human from "../views/race/alliance/human/human"
import Dwarf from "../views/race/alliance/dwarf/dwarf"
import Gnome from "../views/race/alliance/gnome/gnome"
import Nelf from "../views/race/alliance/nelf/nelf"

import Orc from "../views/race/horde/orc/orc"
import Troll from "../views/race/horde/troll/troll"
import Tauren from "../views/race/horde/tauren/tauren"
import Undead from "../views/race/horde/undead/undead"

const factions = [
  {
    id: 0,
    name: "Alliance",
    races: [
      {
        id: 0,
        name: "Human",
        image: require("../assets/images/Creatures/human.png"),
        description: <Human />
      },
      {
        id: 1,
        name: "Dwarf",
        image: require("../assets/images/Creatures/dwarf.png"),
        description: <Dwarf />
      },
      {
        id: 2,
        name: "Gnome",
        image: require("../assets/images/Creatures/gnome.png"),
        description: <Gnome />
      },
      {
        id: 3,
        name: "Night Elf",
        image: require("../assets/images/Creatures/nelf.png"),
        description: <Nelf />
      },
    ],
  },
  {
      id:1,
      name:"Horde",
      races: [
          {
              id:0,
              name:"Orc",
              image: require("../assets/images/Creatures/orc.png"),
              description: <Orc />,
          },
          {
              id:1,
              name:"Troll",
              image: require("../assets/images/Creatures/troll.png"),
              description: <Troll />
          },
          {
              id:2,
              name:"Tauren",
              image: require("../assets/images/Creatures/tauren.png"),
              description: <Tauren />
          },
          {
              id:3,
              name:"Undead",
              image: require("../assets/images/Creatures/undead.png"),
              description: <Undead />
          }
      ]
  }
];

export default factions;
