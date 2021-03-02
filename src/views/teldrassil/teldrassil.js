import Locals from "../home/categories/locals";
import Races from "../home/categories/races";
import Classe from "../home/categories/classes";
import Professions from "../home/categories/professions";
import Description from "./description";

export default function Teldrassil () {
    
    return (
        <div className="root">
      <header className="main_header">
        <h1>World of Warcraft - Classic</h1>
        <h2>Basics of World of Warcraft explained</h2>
        <nav className="site_nav">
          <Locals />
          <Races />
          <Classe />
          <Professions />
        </nav>
      </header>
      <Description />
    </div>
    )
}