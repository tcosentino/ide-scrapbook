import React from "react";
import ReactDOM from "react-dom";

import "normalize.css";
import "./styles.scss";
import IDE from "./components/IDE";

function App() {
  return (
    <div className="App">
      <IDE title="Edit Process" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
