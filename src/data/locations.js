/* Esses arrays de objetos receberão os parâmetros para todos os links do Header do site, os parâmetros aqui são literalmente infinitos, você pode colocar o que quiser com a lógica certa s*/

import Teldrassil from "../views/area/kalimdor/teldrassil/teldrassil";
import Mulgore from "../views/area/kalimdor/mulgore/mulgore";
import Ashenvale from "../views/area/kalimdor/ashenvale/ashenvale";
import Darkshore from "../views/area/kalimdor/darkshore/darkshore";
import Durotar from "../views/area/kalimdor/durotar/durotar";
import Moonglade from "../views/area/kalimdor/moonglade/moonglade";
import Stonetalon from "../views/area/kalimdor/stonetalon/stonetalon";
import Barrens from "../views/area/kalimdor/barrens/barrens";
import Needles from "../views/area/kalimdor/needles/needles";
import Desolace from "../views/area/kalimdor/desolace/desolace";
import Tanaris from "../views/area/kalimdor/tanaris/tanaris";
import Felwood from "../views/area/kalimdor/felwood/felwood";
import Azshara from "../views/area/kalimdor/azshara/azshara";
import Ungoro from "../views/area/kalimdor/ungoro/ungoro";
import Silithus from "../views/area/kalimdor/silithus/silithus";
import Feralas from "../views/area/kalimdor/feralas/feralas";
import Winterspring from "../views/area/kalimdor/winterspring/winterspring";
import Dustwallow from "../views/area/kalimdor/dustwallow/dustwallow";

import Elwynn from "../views/area/ekingdoms/elwynn/elwynn";
import Morogh from "../views/area/ekingdoms/morogh/morogh";
import Tirisfal from "../views/area/ekingdoms/tirisfal/tirisfal";
import Westfall from "../views/area/ekingdoms/westfall/westfall";
import Loch from "../views/area/ekingdoms/loch/loch";
import Silverpine from "../views/area/ekingdoms/silverpine/silverpine";
import Redridge from "../views/area/ekingdoms/redridge/redridge";
import Duskwood from "../views/area/ekingdoms/duskwood/duskwood";
import Wetlands from "../views/area/ekingdoms/wetlands/wetlands";
import Hillsbrad from "../views/area/ekingdoms/hillsbrad/hillsbrad";
import Alterac from "../views/area/ekingdoms/alterac/alterac";
import Arathi from "../views/area/ekingdoms/arathi/arathi";
import Sorrows from "../views/area/ekingdoms/sorrows/sorrows";
import Badlands from "../views/area/ekingdoms/badlands/badlands";
import Hinterlands from "../views/area/ekingdoms/hinterlands/hinterlands";
import Stranglethorn from "../views/area/ekingdoms/stranglethorn/stranglethorn";
import Gorge from "../views/area/ekingdoms/gorge/gorge";
import Wplaguelands from "../views/area/ekingdoms/wplaguelands/wplaguelands";
import Steppes from "../views/area/ekingdoms/steppes/steppes";
import Eplaguelands from "../views/area/ekingdoms/eplaguelands/eplaguelands";
import Deadwind from "../views/area/ekingdoms/deadwind/deadwind";
import Blasted from "../views/area/ekingdoms/blasted/blasted";

const locations = [
  {
    id: 0,
    name: "Kalimdor",
    sublocations: [
      {
        id: 0,
        name: "Teldrassil",
        image: require("../assets/images/Places/Darnassus.png"),
        description: <Teldrassil />,
      },
      {
        id: 1,
        name: "Mulgore",
        image: require("../assets/images/Places/Mulgore_01.png"),
        description: <Mulgore />,
      },
      {
        id: 2,
        name: "Ashenvale",
        image: require("../assets/images/Places/Ashenvale_01.png"),
        description: <Ashenvale />,
      },
      {
        id: 3,
        name: "Darkshore",
        image: require("../assets/images/Places/Darkshore_01.png"),
        description: <Darkshore />,
      },
      {
        id: 4,
        name: "Durotar",
        image: require("../assets/images/Places/Durotar.png"),
        description: <Durotar />,
      },
      {
        id: 5,
        name: "Moonglade",
        image: require("../assets/images/Places/Terrokar.png"),
        description: <Moonglade />,
      },
      {
        id: 6,
        name: "Stonetalon Mountais",
        image: require("../assets/images/Places/Stonetalon_01.png"),
        description: <Stonetalon />,
      },
      {
        id: 7,
        name: "The Barrens",
        image: require("../assets/images/Places/Barrens_01.png"),
        description: <Barrens />,
      },
      {
        id: 8,
        name: "Thousand Needles",
        image: require("../assets/images/Places/ThousandNeedles_01.png"),
        description: <Needles />,
      },
      {
        id: 9,
        name: "Desolace",
        image: require("../assets/images/Places/Desolace.png"),
        description: <Desolace />,
      },
      {
        id: 10,
        name: "Tanaris",
        image: require("../assets/images/Places/Tanaris_01.png"),
        description: <Tanaris />,
      },
      {
        id: 11,
        name: "Felwood",
        image: require("../assets/images/Places/Felwood.png"),
        description: <Felwood />,
      },
      {
        id: 12,
        name: "Azshara",
        image: require("../assets/images/Places/Azshara_01.png"),
        description: <Azshara />,
      },
      {
        id: 13,
        name: "Un'Goro Crater",
        image: require("../assets/images/Places/UnGoroCrater_01.png"),
        description: <Ungoro />,
      },
      {
        id: 14,
        name: "Silithus",
        image: require("../assets/images/Places/Silithus_01.png"),
        description: <Silithus />,
      },
      {
        id: 15,
        name: "Feralas",
        image: require("../assets/images/Places/Feralas.png"),
        description: <Feralas />,
      },
      {
        id: 16,
        name: "Winterspring",
        image: require("../assets/images/Places/Winterspring.png"),
        description: <Winterspring />,
      },
      {
        id: 17,
        name: "Dustwallow Marsh",
        image: require("../assets/images/Places/DustwallowMarsh.png"),
        description: <Dustwallow />,
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
        description: <Elwynn />,
      },
      {
        id: 1,
        name: "Dun Morogh",
        image: require("../assets/images/Places/DunMorogh.png"),
        description: <Morogh />,
      },
      {
        id: 2,
        name: "Tirisfal Glades",
        image: require("../assets/images/Places/TirisfalGlades_01.png"),
        description: <Tirisfal />,
      },
      {
        id: 3,
        name: "Westfall",
        image: require("../assets/images/Places/WestFall_01.png"),
        description: <Westfall />,
      },
      {
        id: 4,
        name: "Loch Modan",
        image: require("../assets/images/Places/LochModan.png"),
        description: <Loch />,
      },
      {
        id: 5,
        name: "Silverpine Forest",
        image: require("../assets/images/Places/Silverpine_01.png"),
        description: <Silverpine />,
      },
      {
        id: 6,
        name: "Redridge Mountains",
        image: require("../assets/images/Places/RedridgeMountains.png"),
        description: <Redridge />,
      },
      {
        id: 7,
        name: "Duskwood",
        image: require("../assets/images/Places/Duskwood.png"),
        description: <Duskwood />,
      },
      {
        id: 8,
        name: "Wetlands",
        image: require("../assets/images/Places/Wetlands_01.png"),
        description: <Wetlands />,
      },
      {
        id: 9,
        name: "Hillsbrad Foothills",
        image: require("../assets/images/Places/HillsbradFoothills.png"),
        description: <Hillsbrad />,
      },
      {
        id: 10,
        name: "Alterac Mountains",
        image: require("../assets/images/Places/AlteracMountains_01.png"),
        description: <Alterac />,
      },
      {
        id: 11,
        name: "Arathi Highlands",
        image: require("../assets/images/Places/ArathiHighlands_01.png"),
        description: <Arathi />,
      },
      {
        id: 12,
        name: "Swamp of Sorrows",
        image: require("../assets/images/Places/SwampSorrows_01.png"),
        description: <Sorrows />,
      },
      {
        id: 13,
        name: "Badlands",
        image: require("../assets/images/Places/Badlands_01.png"),
        description: <Badlands />,
      },
      {
        id: 14,
        name: "The Hinterlands",
        image: require("../assets/images/Places/Hinterlands_01.png"),
        description: <Hinterlands />,
      },
      {
        id: 15,
        name: "Stranglethorn Vale",
        image: require("../assets/images/Places/Stranglethorn_01.png"),
        description: <Stranglethorn />,
      },
      {
        id: 16,
        name: "Searing Gorge",
        image: require("../assets/images/Places/SearingGorge_01.png"),
        description: <Gorge />,
      },
      {
        id: 17,
        name: "Western Plaguelands",
        image: require("../assets/images/Places/WesternPlaguelands_01.png"),
        description: <Wplaguelands />,
      },
      {
        id: 18,
        name: "Burning Steppes",
        image: require("../assets/images/Places/BurningSteppes_01.png"),
        description: <Steppes />,
      },
      {
        id: 19,
        name: "Eastern Plaguelands",
        image: require("../assets/images/Places/EasternPlaguelands.png"),
        description: <Eplaguelands />,
      },
      {
        id: 20,
        name: "Deadwind Pass",
        image: require("../assets/images/Places/DeadwindPass.png"),
        description: <Deadwind />,
      },
      {
        id: 21,
        name: "Blasted Lands",
        image: require("../assets/images/Places/BlastedLands_01.png"),
        description: <Blasted />,
      },
    ],
  },
];

export default locations;
