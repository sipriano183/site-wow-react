import { useState } from "react";
import { useHistory } from "react-router-dom";

import classes from "../../../data/classes";

export default function Classe() {
  // O botão para mostrar e esconder partes da página utiliza duas variáveis, uma comum e um setter, ambos recebendo o método useState como false. Depois, é feita outra função para trocar o estado de isShow(revertendo entre false e true)
  const [isShow, setIsShow] = useState(false);
  const toggle = () => setIsShow(!isShow);
  const history = useHistory();


  return (
    // a lógica do isShow acima é atrelada ao botão através do atributo onClick.
    <div className="items">
      <button className="show" onClick={toggle}>
        {isShow ? "Classes" : "Classes"}
      </button>
      <ul className="subitems">
        {isShow &&
          classes.map((classes) => (
            <li>
              <button
                      onClick={() =>
                        history.push(
                          "/classe/" + classes.name.replace(/ /g, "")
                        )
                      }
                      className="show_text"
                    >
                      <img
                        src={classes.image.default}
                        className="icon"
                        alt="Location Icon"
                        title={classes.name}
                      />
                    </button>
            </li>
          ))}
      </ul>
    </div>
    // É feito um mapeamento do array passado no componente classes, trazendo cada elemento através de uma chave, possibilitando a renderização automática de tudo passado por lá
  );
}
