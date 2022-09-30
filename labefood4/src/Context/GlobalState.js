import React from "react";
import axios from "axios";
import GlobalStateContext from "./GlobalStateContext";
import { useState } from "react";
import { BASE_URL } from "../Constants/Constants";
import { useNavigate } from "react-router-dom";
import useRequestData from "../Hooks/useRequestData"

const GlobalState = (props) => {

    // HARDCODED STUFF
    const hardHeaders = 'Content-Type: application/json'
    const hardUrl = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodD/restaurants"


    // STATES

    const [page, setPage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [restaurants, setRestaurants] = useState([])
    const [token, setToken] = useState({})


    // REQUESTS
    const login = (url, body, headers, event) => {

        event.preventDefault()

        axios.post(url.url, body.body, headers.headers)
            .then((response) => {
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("userName", email)
                setToken(response.data.token)
                console.log(token)

            }).catch((error) => {
                alert("Usuário não cadastrado ou senha inválida")
                console.log(error);
            })
    }

    const signUp = (url, body, headers, event) => {

        event.preventDefault()

        axios.post(url.url, body.body, headers.headers)
            .then((response) => {
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("userName", email)
                setToken(response.data.token)
                console.log(token)

            }).catch((error) => {
                alert("Erro SignUp")
                console.log(error);
            })
    }



    const states = { email, password, restaurants, token, name, page }
    const setters = { setEmail, setPassword, setRestaurants, setToken, setName, setPage }
    const requests = { login, signUp }




    return (
        <GlobalStateContext.Provider value={{ states, setters, requests }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState

