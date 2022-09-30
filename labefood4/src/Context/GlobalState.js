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
    const [email, setEmail] = useState("");
  
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
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

    // const getRestaurant = (url, headers) => {

    //     axios.get(url, headers)
    //         .then((response) => {
    //             setters.setRestaurants(response.data)
    //             console.log(restaurants)

    const signup = (url, body, headers, event) => {

        event.preventDefault()

        axios.post(url.url, body.body, headers.headers)
            .then((response) => {
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("userName", email, name)

    //         }).catch((error) => {
    //             alert("BUGOU GETRESTAURANT")
    //             console.log(url, headers)
    //             console.log(error.response.data);
    //             console.log(error.response.status);
    //             console.log(error.response.headers);
    //         })


    // }

    const states = { email, password, restaurants, token, name }
    const setters = { setEmail, setPassword, setRestaurants, setToken, setName }
    const requests = { login, signup }


    return (
        <GlobalStateContext.Provider value={{ states, setters, requests }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState

