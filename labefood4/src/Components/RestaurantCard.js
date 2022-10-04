import React from "react";
import GlobalStateContext from "../Context/GlobalStateContext";
import { useContext } from "react";
import { CardBox, CardImg, Box, Restaurant, DeliveryInfo, DeliveryInfoBox } from "../Style/GlobalStyle";
import { useNavigate } from "react-router-dom";




export const RestaurantCard = ({ restaurant }) => {

    const { states, setters, requests } = useContext(GlobalStateContext)
    const navigate = useNavigate()

    const chooseRestaurant = () => {
        setters.setRestaurantId(restaurant.id)
        navigate("/restaurant")
    }

    return (
        <Box onClick={chooseRestaurant}>
            <CardBox>
                <CardImg src={restaurant.logoUrl} alt="logo do restaurante" />
                <Restaurant>{restaurant.name}</Restaurant>
                <DeliveryInfoBox>

                    <DeliveryInfo>{restaurant.deliveryTime} min</DeliveryInfo>
                    <DeliveryInfo>Frete R${restaurant.shipping},00</DeliveryInfo>
                </DeliveryInfoBox>



            </CardBox>
        </Box>
    )
}