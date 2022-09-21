import React from "react";
import Router from "./Routes/Routes";
import StateGlobal from "./Context/StateGlobal";

function App() {
  return (
    <StateGlobal>
      <Router />
    </StateGlobal>
  );
}

export default App;