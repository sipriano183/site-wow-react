const factions = [
  {
    id: 0,
    name: "Alliance",
    races: [
      {
        id: 0,
        name: "Human",
        image: require("../assets/images/Creatures/human.png"),
      },
      {
        id: 1,
        name: "Dwarf",
        image: require("../assets/images/Creatures/dwarf.png")
      },
      {
        id: 2,
        name: "Gnome",
        image: require("../assets/images/Creatures/gnome.png")
      },
      {
        id: 3,
        name: "Night Elf",
        image: require("../assets/images/Creatures/nelf.png")
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
              image: require("../assets/images/Creatures/orc.png")
          },
          {
              id:1,
              name:"Troll",
              image: require("../assets/images/Creatures/troll.png")
          },
          {
              id:2,
              name:"Tauren",
              image: require("../assets/images/Creatures/tauren.png")
          },
          {
              id:3,
              name:"Undead",
              image: require("../assets/images/Creatures/undead.png")
          }
      ]
  }
];

export default factions;
