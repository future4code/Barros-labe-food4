import React from "react";
import Router from "./Routes/Routes";
import GlobalState from "./Context/GlobalState";


function App() {
  return (

    <GlobalState>
      < Router />
    </GlobalState >
  );
}

export default App;