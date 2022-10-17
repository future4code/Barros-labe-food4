import React from "react";
import { Box, IFutureLogo, RedButton, Tittle, form, FormBox } from "../Style/GlobalStyle";
import LogoFood4 from "../Assets/logo-future-eats-invert.png"
import { InputBox } from "../Components/InputBox";
import * as Coordinator from "../Routes/coordinator"
import GlobalStateContext from "../Context/GlobalStateContext";
import { useContext } from "react";
import { BASE_URL } from "../Constants/Constants";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddressPage() {

    const navigate = useNavigate()

    const GoToAddressPage = () => {
        navigate("/address")
    }
    const { states, setters, requests } = useContext(GlobalStateContext)



    const handleEmail = (event) => {
        setters.setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setters.setPassword(event.target.value)
    }

    const handleCpf = (event) => {
        setters.setCpf(event.target.value)
    }
    const handleName = (event) => {
        setters.setName(event.target.value)
    }


    const bodySignup = {
        "name": states.name,
        "email": states.email,
        "cpf": states.cpf,
        "password": states.password
    }

    const headers =
        'Content-Type: application/json'

    const url = `${BASE_URL}signup`

    return (
        <Box>

            <form>


                <Tittle>Meu endereço</Tittle>
                <InputBox
                    label="Logradouro*"
                    placeholder="Rua / Av."
                    type="email"
                    format="ignoring this for now"
                    onChange={handleName}
                />

                <InputBox
                    label="Número*"
                    placeholder="Número"
                    type="email"
                    format="ignoring this for now"
                    onChange={handleEmail}
                />

                <InputBox
                    label="Complemento*"
                    placeholder="Apto. / Bloco"
                    type="email"
                    format="ignoring this for now"
                    onChange={handleCpf}
                />

                <InputBox
                    label="Bairro*"
                    placeholder="Bairro"
                    type="email"
                    format="ignoring this for now"
                    onChange={handleCpf}
                />

                <InputBox
                    label="Cidade*"
                    placeholder="Cidade"
                    type="email"
                    format="ignoring this for now"
                    onChange={handleCpf}
                />

                <InputBox
                    label="Estado*"
                    placeholder="Estado"
                    type="email"
                    format="ignoring this for now"
                    onChange={handleCpf}
                />

                <RedButton onClick={() => Coordinator.goToLoginPage(navigate)}>Salvar</RedButton>
            </form>
        </Box>

    )



}
