import React, { useEffect, useContext, useState } from "react";
import { Tittle, Box, InputBoxRectangle, InputBoxLocus, InputBoxInput, EyeImg, SearchImg, Filter, FilterButton } from "../Style/GlobalStyle";
import Lupa from "../Assets/search.png"
import { RestaurantCard } from "../Components/RestaurantCard"
import { useAuth } from "../Hooks/Hooks";
import getRestaurant from "../Context/GlobalState";
import GlobalStateContext from "../Context/GlobalStateContext";
import { BASE_URL } from "../Constants/Constants";
import useRequestData from "../Hooks/useRequestData";
import { useNavigate } from "react-router-dom";
import { BottomMenu } from "../Components/BottomMenu";

export default function HomePage() {

    useAuth()

    const { states, setters, requests } = useContext(GlobalStateContext)

    const headers = {
        'Content-Type': 'application / json',
        'auth': localStorage.getItem("token")
    }
    const [dataRestaurants, errorRestaurants, isLoadingRestaurants] = useRequestData(`${BASE_URL}restaurants`, localStorage.getItem("token"))
    const [category, setCategory] = useState("")
    const navigate = useNavigate()

    const restaurantList = dataRestaurants && dataRestaurants.restaurants.map((restaurant) => {
        if (restaurant.category === category) {
            return <RestaurantCard restaurant={restaurant} key={restaurant.id} />
        } else if (category === "") {
            return <RestaurantCard restaurant={restaurant} key={restaurant.id} />
        }
    })

    setters.setPage = "home"

    return (
        <Box>
            <Tittle>iFuture</Tittle>



            <InputBoxLocus>
                <InputBoxRectangle>
                    <SearchImg src={Lupa} />
                    <InputBoxInput placeholder="Restaurante" />
                </InputBoxRectangle>
            </InputBoxLocus>

            <Filter>
                <FilterButton onClick={() => { category !== "Hamburguer" ? setCategory("Hamburguer") : setCategory("") }}>Burger</FilterButton>
                <FilterButton onClick={() => { category !== "Asiática" ? setCategory("Asiática") : setCategory("") }}>Asiática</FilterButton>
                <FilterButton onClick={() => { category !== "Árabe" ? setCategory("Árabe") : setCategory("") }}>Arabe</FilterButton>
                <FilterButton onClick={() => { category !== "Italiana" ? setCategory("Italiana") : setCategory("") }}>Italiana</FilterButton>
                <FilterButton onClick={() => { category !== "Sorvetes" ? setCategory("Sorvetes") : setCategory("") }}>Sorvetes</FilterButton>
                <FilterButton onClick={() => { category !== "Carnes" ? setCategory("Carnes") : setCategory("") }}>Carnes</FilterButton>
                <FilterButton onClick={() => { category !== "Baiana" ? setCategory("Baiana") : setCategory("") }}>Baiana</FilterButton>
                <FilterButton onClick={() => { category !== "Petiscos" ? setCategory("Petiscos") : setCategory("") }}>Petiscos</FilterButton>
                <FilterButton onClick={() => { category !== "Mexicana" ? setCategory("Mexicana") : setCategory("") }}>Mexicana</FilterButton>

            </Filter>

            {restaurantList}



            <BottomMenu page="home" />
        </Box>
    )
}
