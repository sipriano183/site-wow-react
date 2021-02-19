import classes from "../../../data/classes";

export default function classe() {
  return (
    <li>
      Classes
      <button id="local_show">Expandir</button>
      <button id="local_hide">Esconder</button>
      {classes.map((classes) => (
        <ul class="classes" key={classes.id}>
          <li>{classes.name}</li>
        </ul>
      ))}
    </li>
  );
}
