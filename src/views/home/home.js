import locations from "../../data/locals";
import Locals from "./categories/locals";

export default function Home () {
    return (
    <div class="wrapper">
    <header class="main_header">
      <h1>World of Warcraft - Classic</h1>
      <h2>Uma página sobre a versão Clássica do jogo World of Warcraft.</h2>
    </header>
    <nav class="site_nav">
      <h2>Navegue pelo site:</h2>
      <ul>
        <Locals/>
      </ul>
    </nav>
    </div>
    )
}