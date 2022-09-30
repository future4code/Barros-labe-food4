import React from "react";
import GlobalStateContext from "../Context/GlobalStateContext";
import { useContext } from "react";
import { BottomMenuStyle } from "../Style/GlobalStyle";
import { IconImg } from "../Style/GlobalStyle"
import { useNavigate } from "react-router-dom";
import homeIcon from "../Assets/homepage.png"
import cartIcon from "../Assets/shopping-cart.png"
import avatarIcon from "../Assets/avatar.png"
import homeIconRed from "../Assets/homepagered.png"
import cartIconRed from "../Assets/shopping-cartred.png"
import avatarIconRed from "../Assets/avatarred.png"
import { useState, useEffect } from "react";


export const BottomMenu = () => {

    const [face, setFace] = useState("home")
    const navigate = useNavigate()
    const { states, setters, requests } = useContext(GlobalStateContext)

    const clickHome = () => {
        setFace("home")
        navigate("/home")

    }
    const clickCart = () => {
        setFace("cart")
        navigate("/cart")

    }
    const clickProfile = () => {
        setFace("profile")
        navigate("/profile")

    }

    return (
        <div>
            {
                face === 'home' && (

                    <BottomMenuStyle>
                        <IconImg src={homeIconRed} />
                        <IconImg src={cartIcon} onClick={clickCart} />
                        <IconImg src={avatarIcon} onClick={clickProfile} />
                    </BottomMenuStyle>
                )
            }
            {
                face === "cart" && (

                    <BottomMenuStyle>
                        <IconImg src={homeIcon} onClick={clickHome} />
                        <IconImg src={cartIconRed} />
                        <IconImg src={avatarIcon} onClick={clickProfile} />
                    </BottomMenuStyle>
                )
            }
            {
                face === "profile" && (
                    <BottomMenuStyle>
                        <IconImg src={homeIcon} onClick={clickHome} />
                        <IconImg src={cartIcon} onClick={clickCart} />
                        <IconImg src={avatarIconRed} />
                    </BottomMenuStyle>
                )
            }</div>
    )
}