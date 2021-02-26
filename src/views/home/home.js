import Locals from "./categories/locals";
import Races from "./categories/races";
import Classe from "./categories/classes";
import Professions from "./categories/professions";

export default function Home() {
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
      <div className="main_introduction">
      </div>
    </div>
  );
}
