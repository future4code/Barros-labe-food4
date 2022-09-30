import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import LandingPage from '../Pages/LandingPage';
import AddressPage from '../Pages/AddressPage';
import LoginPage from '../Pages/LoginPage';
import SignUpPage from '../Pages/SignUpPage';
import ProfilePage from '../Pages/ProfilePage';
import CartPage from '../Pages/CartPage';
import RestaurantPage from '../Pages/RestaurantPage';
import SearchPage from '../Pages/SearchPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/address' element={<AddressPage />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/restaurant' element={<RestaurantPage />} />
                <Route path='/search' element={<SearchPage />} />

            </Routes>
        </BrowserRouter>
    );
}


export default Router;