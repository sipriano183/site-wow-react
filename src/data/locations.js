/* Esses arrays de objetos receberão os parâmetros para todos os links do Header do site, os parâmetros aqui são literalmente infinitos, você pode colocar o que quiser com a lógica certa */

import Teldrassil from "../views/teldrassil/teldrassil";

const locations = [
  {
    id: 0,
    name: "Kalimdor",
    sublocations: [
      {
        id: 0,
        name: "Teldrassil",
        image: require("../assets/images/Places/Darnassus.png"),
        description: <Teldrassil />
      },
      {
        id: 1,
        name: "Mulgore",
        image: require("../assets/images/Places/Mulgore_01.png"),
      },
      {
        id: 2,
        name: "Ashenvale",
        image: require("../assets/images/Places/Ashenvale_01.png"),
      },
      {
        id: 3,
        name: "Darkshore",
        image: require("../assets/images/Places/Darkshore_01.png"),
      },
      {
        id: 4,
        name: "Durotar",
        image: require("../assets/images/Places/Durotar.png"),
      },
      {
        id: 5,
        name: "Moonglade",
        image: require("../assets/images/Places/Terrokar.png"),
      },
      {
        id: 6,
        name: "Stonetalon Mountais",
        image: require("../assets/images/Places/Stonetalon_01.png"),
      },
      {
        id: 7,
        name: "The Barrens",
        image: require("../assets/images/Places/Barrens_01.png"),
      },
      {
        id: 8,
        name: "Thousand Needles",
        image: require("../assets/images/Places/ThousandNeedles_01.png"),
      },
      {
        id: 9,
        name: "Desolace",
        image: require("../assets/images/Places/Desolace.png"),
      },
      {
        id: 10,
        name: "Tanaris",
        image: require("../assets/images/Places/Tanaris_01.png"),
      },
      {
        id: 11,
        name: "Felwood",
        image: require("../assets/images/Places/Felwood.png"),
      },
      {
        id: 12,
        name: "Azshara",
        image: require("../assets/images/Places/Azshara_01.png"),
      },
      {
        id: 13,
        name: "Un'Goro Crater",
        image: require("../assets/images/Places/UnGoroCrater_01.png"),
      },
      {
        id: 14,
        name: "Silithus",
        image: require("../assets/images/Places/Silithus_01.png"),
      },
      {
        id: 15,
        name: "Feralas",
        image: require("../assets/images/Places/Feralas.png"),
      },
      {
        id: 16,
        name: "Winterspring",
        image: require("../assets/images/Places/Winterspring.png"),
      },
      {
        id: 17,
        name: "Dustwallow Marsh",
        image: require("../assets/images/Places/DustwallowMarsh.png"),
      },
    ],
  },
  {
    id: 1,
    name: "Eastern Kingdoms",
    sublocations: [
      {
        id: 0,
        name: "Elwynn Forest",
        image: require("../assets/images/Places/ElwynnForest.png"),
      },
      {
        id: 1,
        name: "Dun Morogh",
        image: require("../assets/images/Places/DunMorogh.png"),
      },
      {
        id: 2,
        name: "Tirisfal Glades",
        image: require("../assets/images/Places/TirisfalGlades_01.png"),
      },
      {
        id: 3,
        name: "Westfall",
        image: require("../assets/images/Places/WestFall_01.png"),
      },
      {
        id: 4,
        name: "Loch Modan",
        image: require("../assets/images/Places/LochModan.png"),
      },
      {
        id: 5,
        name: "Silverpine Forest",
        image: require("../assets/images/Places/Silverpine_01.png"),
      },
      {
        id: 6,
        name: "Redridge Mountains",
        image: require("../assets/images/Places/RedridgeMountains.png"),
      },
      {
        id: 7,
        name: "Duskwood",
        image: require("../assets/images/Places/Duskwood.png"),
      },
      {
        id: 8,
        name: "Wetlands",
        image: require("../assets/images/Places/Wetlands_01.png"),
      },
      {
        id: 9,
        name: "Hillsbrad Foothills",
        image: require("../assets/images/Places/HillsbradFoothills.png"),
      },
      {
        id: 10,
        name: "Alterac Mountains",
        image: require("../assets/images/Places/AlteracMountains_01.png"),
      },
      {
        id: 11,
        name: "Arathi Highlands",
        image: require("../assets/images/Places/ArathiHighlands_01.png"),
      },
      {
        id: 12,
        name: "Swamp of Sorrows",
        image: require("../assets/images/Places/SwampSorrows_01.png"),
      },
      {
        id: 13,
        name: "Badlands",
        image: require("../assets/images/Places/Badlands_01.png"),
      },
      {
        id: 14,
        name: "The Hinterlands",
        image: require("../assets/images/Places/Hinterlands_01.png"),
      },
      {
        id: 15,
        name: "Stranglethorn Vale",
        image: require("../assets/images/Places/Stranglethorn_01.png"),
      },
      {
        id: 16,
        name: "Searing Gorge",
        image: require("../assets/images/Places/SearingGorge_01.png"),
      },
      {
        id: 17,
        name: "Western Plaguelands",
        image: require("../assets/images/Places/WesternPlaguelands_01.png"),
      },
      {
        id: 18,
        name: "Burning Steppes",
        image: require("../assets/images/Places/BurningSteppes_01.png"),
      },
      {
        id: 19,
        name: "Eastern Plaguelands",
        image: require("../assets/images/Places/EasternPlaguelands.png"),
      },
      {
        id: 20,
        name: "Deadwind Pass",
        image: require("../assets/images/Places/DeadwindPass.png"),
      },
      {
        id: 21,
        name: "Blasted Lands",
        image: require("../assets/images/Places/BlastedLands_01.png"),
      },
    ],
  },
];

export default locations;
