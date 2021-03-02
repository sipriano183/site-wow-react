import { useHistory, useParams } from "react-router-dom";
import locations from "../../data/locations";

export default function Area() {
  const { area } = useParams();

  const current = [
    ...locations[0].sublocations,
    ...locations[1].sublocations,
  ].find(
    (loc) =>
      loc.name.toLowerCase().replace(/ /g, "") ===
      area.toLowerCase().replace(/ /g, "")
  );
  return <div className="root">{current && current.description}</div>;
}
