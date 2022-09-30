import React, { useEffect, useContext, useState } from "react";
import { Tittle, Box, InputBoxRectangle, InputBoxLocus, InputBoxInput, EyeImg, SearchImg } from "../Style/GlobalStyle";
import Lupa from "../Assets/search.png"
import { RestaurantCard } from "../Components/RestaurantCard"
import { useAuth } from "../Hooks/Hooks";
import getRestaurant from "../Context/GlobalState";
import GlobalStateContext from "../Context/GlobalStateContext";
import { BASE_URL } from "../Constants/Constants";
import useRequestData from "../Hooks/useRequestData";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const { states, setters, requests } = useContext(GlobalStateContext)

    const headers = {
        'Content-Type': 'application / json',
        'auth': localStorage.getItem("token")
    }

    const [dataRestaurants, errorRestaurants, isLoadingRestaurants] = useRequestData(`${BASE_URL}restaurants`, localStorage.getItem("token"))
    const [category, setCategory] = useState("")

    const navigate = useNavigate()

    useAuth()

    const restaurantList = dataRestaurants && dataRestaurants.restaurants.map((restaurant) => {
        if (restaurant.category === category) {
            return <RestaurantCard restaurant={restaurant} key={restaurant.id} />
        } else if (category === "") {
            return <RestaurantCard restaurant={restaurant} key={restaurant.id} />
        }
    })

    return (
        <Box>
            <Tittle>iFuture</Tittle>

            <button onClick={() => { category !== "Hamburguer" ? setCategory("Hamburguer") : setCategory("") }}>Burger</button>
            <button onClick={() => { category !== "Asiática" ? setCategory("Asiática") : setCategory("") }}>Asiática</button>
            <button onClick={() => { category !== "Árabe" ? setCategory("Árabe") : setCategory("") }}>Arabe</button>
            <button onClick={() => { category !== "Italiana" ? setCategory("Italiana") : setCategory("") }}>Italiana</button>
            <button onClick={() => { category !== "Sorvetes" ? setCategory("Sorvetes") : setCategory("") }}>Sorvetes</button>
            <button onClick={() => { category !== "Carnes" ? setCategory("Carnes") : setCategory("") }}>Carnes</button>
            <button onClick={() => { category !== "Baiana" ? setCategory("Baiana") : setCategory("") }}>Baiana</button>
            <button onClick={() => { category !== "Petiscos" ? setCategory("Petiscos") : setCategory("") }}>Petiscos</button>
            <button onClick={() => { category !== "Mexicana" ? setCategory("Mexicana") : setCategory("") }}>Mexicana</button>

            <InputBoxLocus>
                <InputBoxRectangle>
                    <SearchImg src={Lupa} />
                    <InputBoxInput placeholder="Restaurante" />
                </InputBoxRectangle>
            </InputBoxLocus>
            {restaurantList}
        </Box>
    )



}
