import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return <ErrorBox>The world is ending</ErrorBox>;
}

var ErrorBox = ({ children }) => {
  return (
    <>
      {" "}
      <div className="errorBox">{children}</div>
    </>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
