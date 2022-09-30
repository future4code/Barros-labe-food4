import React from "react";
import axios from "axios";
import GlobalStateContext from "./GlobalStateContext";
import { useState } from "react";
import { BASE_URL } from "../Constants/Constants";
import { useNavigate } from "react-router-dom";



const GlobalState = (props) => {

    // STATES

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");   
    const [name, setName] = useState("");

    const urlRoubada = `https://us-central1-missao-newton.cloudfunctions.net/fourFoodD/login`
    const bodyRoubado = {
        "email": `astrodev@future4.com`,
        "password": `123456`
    }
    const headersRoubado =
        'Content-Type: application/json'

    // REQUESTS

    const login = (url, body, headers, event) => {

        event.preventDefault()

        axios.post(url.url, body.body, headers.headers)
            .then((response) => {
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("userName", email)



            }).catch((error) => {
                alert("Usuário não cadastrado ou senha inválida")
                console.log(error);
            })

    }


    const signup = (url, body, headers, event) => {

        event.preventDefault()

        axios.post(url.url, body.body, headers.headers)
            .then((response) => {
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("userName", email, name)



            }).catch((error) => {
                alert("Usuário não cadastrado ou senha inválida")
                console.log(error);
            })

    }



    const states = { email, password, name}
    const setters = { setEmail, setPassword, setName }
    const requests = { login, signup }

    return (
        <GlobalStateContext.Provider value={{ states, setters, requests }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState

