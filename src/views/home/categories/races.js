import factions from "../../../data/races";

export default function races() {
  return (
    <li>
      Races
      <button id="local_show">Expandir</button>
      <button id="local_hide">Esconder</button>
      {factions.map((faction) => (
        <ul key={faction.id}>
          <li>
            {faction.name}
            <ul class="races">
              {faction.races.map((races) => (
                <li key={races.id}>{races.name}</li>
              ))}
            </ul>
          </li>
        </ul>
      ))}
    </li>
  );
}

