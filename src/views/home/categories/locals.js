import locations from "../../../data/locations";

export default function Locals() {
  return (
    <li>
      Areas
      <button id="local_show">Expandir</button>
      <button id="local_hide">Esconder</button>
      {locations.map((location) => (
        <ul key={location.id}>
          <li>
            {location.name}
            <ul class="kalimdor_zone">
              {location.sublocations.map((sublocation) => (
                <li key={sublocation.id}>{sublocation.name}</li>
              ))}
            </ul>
          </li>
        </ul>
      ))}
    </li>
  );
}
