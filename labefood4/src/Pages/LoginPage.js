import { React, useState } from "react";
import LogoFood4 from "../Assets/logo-future-eats-invert.png"
import { useNavigate } from "react-router-dom";
import { InputBox } from "../Components/InputBox";
import { Box, IFutureLogo, RedButton, Tittle, FormBox } from "../Style/GlobalStyle";
import { BASE_URL } from "../Constants/Constants";
import axios from "axios";
import GlobalState from "../Context/GlobalState";
import GlobalStateContext from "../Context/GlobalStateContext";
import { useContext } from "react";


export default function LoginPage() {


    const navigate = useNavigate()

    const GoToSignUpPage = () => {
        navigate("/signup")
    }
    const { states, setters, requests } = useContext(GlobalStateContext)


    const handleEmail = (event) => {
        setters.setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setters.setPassword(event.target.value)
    }
    const body = {
        "email": states.email,
        "password": states.password
    }
    const headers =
        'Content-Type: application/json'

    const url = `${BASE_URL}login`


    return (
        <Box>
            <IFutureLogo src={LogoFood4} alt="logo da Labefood" />
            <Tittle>Entrar</Tittle>


            <form onSubmit={(e) => { requests.login({ url }, { body }, { headers }, e) }}>
                <InputBox
                    label="E-mail"
                    placeholder="Email@email.com"
                    type="email"
                    format="ignoring this for now"
                    onChange={handleEmail}
                />

                <InputBox
                    label="Senha"
                    placeholder="Mínimo 6 caracteres"
                    type="password"
                    format="ignoring this for now"
                    onChange={handlePassword} />
                <RedButton>Entrar</RedButton>
            </form>

            <p>Não possui cadastro? </p><button onClick={() => GoToSignUpPage()}>Clique aqui</button>
        </Box>
    )



}
