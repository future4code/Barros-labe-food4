import React from "react";
import LogoFood4 from "../Assets/logo-future-eats-invert.png"
import { Navigate, useNavigate } from "react-router-dom";




export default function LoginPage() {

    const navigate = useNavigate();
    const GoToSignUpPage = () => {
        navigate(`/signup`)
    }

    return (
        <div>
            <img src={LogoFood4} alt="logo da Labefood" />
            <h3>Entrar</h3>

            <form>
                <label>Login</label>
                <input type="text" placeholder="email@email.com"></input>
                <label>Senha*</label>
                <input type="text" placeholder="Minimo 6 caracteres"></input>
                <button>Login</button>
            </form>
            <p>Não possui cadastro? </p><button onClick={() => GoToSignUpPage()}>Clique aqui</button>
        </div>
    )



}
