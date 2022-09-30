import React from "react";
import { Box, IFutureLogo, RedButton, Tittle, form, FormBox } from "../Style/GlobalStyle";
import LogoFood4 from "../Assets/logo-future-eats-invert.png"
import { InputBox } from "../Components/InputBox";
import * as Coordinator from "../Routes/coordinator"
import GlobalStateContext from "../Context/GlobalStateContext";
import { useContext } from "react";
import { BASE_URL } from "../Constants/Constants";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {

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
            
            

            
            <form onSubmit={(e) => { requests.signup({ url }, { bodySignup }, { headers }, e) }}>
                
            <IFutureLogo src={LogoFood4} alt="logo da Labefood"/>
            <Tittle>Cadastrar</Tittle>
                <InputBox
                    label="Nome*"
                    placeholder="Nome e sobrenome"
                    type="text"
                    format="ignoring this for now"
                    onChange={handleName}
                />

                <InputBox
                    label="E-mail*"
                    placeholder="email@email.com"
                    type="email"
                    format="ignoring this for now"
                    onChange={handleEmail}
                />

                <InputBox
                    label="Cpf*"
                    placeholder="000.000.000-00"
                    type="email"
                    format="ignoring this for now"
                    onChange={handleCpf}
                />

                <InputBox
                    label="Senha*"
                    placeholder="Mínimo 6 caracteres"
                    type="password"
                    format="ignoring this for now"
                    onChange={handlePassword} />

                <InputBox
                    label="Confirmar*"
                    placeholder="Confirme a senha anterior"
                    type="password"
                    format="ignoring this for now"
                    onChange={handlePassword}
                />
                
                <RedButton onClick={() => Coordinator.goToLoginPage}>Criar</RedButton>
            </form>
        </Box>

    )



}
