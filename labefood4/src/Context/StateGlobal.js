import React from "react";
import axios from "axios";
import ContextGlobalState from "./ContextGlobalState";

const StateGlobal = (props) => {

    return (
        <ContextGlobalState.Provider value={data}>
            {props.children}
        </ContextGlobalState.Provider>
    )
}

export default StateGlobal