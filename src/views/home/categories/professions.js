import professions from "../../../data/professions";

export default function profession() {
  return (
    <li>
      Professions:
      <button id="local_show">Expandir</button>
      <button id="local_hide">Esconder</button>
      {professions.map((professions) => (
        <ul class="professions" key={professions.id}>
          <li>
            <img src={professions.image.default} alt="Profession Icon" /> -
            - {professions.name}
          </li>
        </ul>
      ))}
    </li>
  );
}
