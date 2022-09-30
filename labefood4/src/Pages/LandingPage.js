import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { RedBox } from "../Style/GlobalStyle";
import Logo from "../Assets/logo-future-eats.png"
import Loading from "../Assets/loading.gif"


export default function LandingPage() {

    const navigate = useNavigate();
    const GoToLoginPage = () => {
        navigate(`/login`)
    }

    const myTimeout = setTimeout(GoToLoginPage, 3141.5)



    return (
        <RedBox>
            <img src={Logo} />

            <img src={Loading} />
        </RedBox>
    )



}