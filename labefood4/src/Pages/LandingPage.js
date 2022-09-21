import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function LandingPage() {

    const navigate = useNavigate();
    const GoToLoginPage = () => {
        navigate(`/login`)
    }

    const myTimeout = setTimeout(GoToLoginPage, 3000)



    return (
        <div>
            <h1>Landing Loading</h1>
            <button onClick={() => GoToLoginPage()}>next</button>
        </div >
    )



}
