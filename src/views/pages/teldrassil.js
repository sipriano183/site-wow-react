import React from "react";
import ReactDOM from "react-dom";

class Teldrassil extends React.Component {
  render() {
      return (
        <div className="root">
            <h1>Teste!</h1>
        </div>

      )
  }
}

ReactDOM.render(
      <Teldrassil />,
    document.getElementById("root")
);
