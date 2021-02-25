import Locals from "./categories/locals";
import Races from "./categories/races";
import Classe from "./categories/classes";
import Professions from "./categories/professions";

export default function Home() {
  return (
    <div className="root">
      <header className="main_header">
        <h1>World of Warcraft - Classic</h1>
        <h2>Uma página sobre a versão Clássica do jogo World of Warcraft.</h2>
        <nav className="site_nav">
          <Locals />
          <Races />
          <Classe />
          <Professions />
      </nav>
      </header>
    </div>
  );
}
