import { useState } from "react";
import locations from "../../../data/locations";
import { useHistory } from "react-router-dom";

export default function Locals() {
  const [isShow, setIsShow] = useState(false);
  const toggle = () => setIsShow(!isShow);

  const history = useHistory();

  // Aqui nós temos um mapeamento duplo, pois temos 4 arrays no componente locations. Dois locations (Kalimdor e Eastern Kingdoms) e dois sublocations, com todas as zonas de cada um. Mas a lógica se mantém
  return (
    <div>
      <button className="show" onClick={toggle}>
        {isShow ? "Areas" : "Areas"}
      </button>
      {isShow &&
        locations.map((location) => (
          <ul key={location.id} className="items">
            <li>{location.name}</li>
            <ul className="subitems">
              {location.sublocations.map((sublocation) => (
                <li key={sublocation.id}>
                  <button
                    onClick={() =>
                      history.push(
                        "/area/" + sublocation.name.replace(/ /g, "")
                      )
                    }
                    className="show_text"
                  >
                    <img
                      src={sublocation.image.default}
                      className="icon"
                      alt="Location Icon"
                      title={sublocation.name}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </ul>
        ))}
    </div>
    //A lógica de roteamento também é feita aqui e na página Area
  );
}
