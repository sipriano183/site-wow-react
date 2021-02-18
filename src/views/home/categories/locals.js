import locations from "../../../data/locals";

export default function Locals () {
    return (<li>
        Locais
        <button id="local_show">Expandir</button>
        <button id="local_hide">Esconder</button>
        {locations.map((location) => (<ul
          key={location.id}
        >
          <li>
            {location.name}
            <ul class="kalimdor">
              {location.sublocations.map((sublocation) => (<li key={sublocation.id}>
                <a
                  href="./pages/areas/kalimdor/teldrasil.html"
                  title={sublocation.name}
                  >{sublocation.name}</a
                >
              </li>))}
            </ul>
          </li>
        </ul>))}
      </li>)
}