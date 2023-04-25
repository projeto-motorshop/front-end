import React from "react";
import { Route, Routes } from "react-router-dom";
import { HeaderHome } from "../components/HeaderHome";
import { Home } from "../pages/Home";
import Login from "../pages/Login";
import { Product } from "../pages/Product";
import { Profile } from "../pages/Profile";
import { Register } from "../pages/Register";
import { TestePage } from "../pages/TestePage";
import UserProducts from './../pages/userProducts/index';

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />

            <Route element={<HeaderHome />}>
                <Route path="/testePage" element={<TestePage />} />
                <Route path="/userproducts" element={<UserProducts />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<Home />} />
                <Route path="/product">
                    <Route path=":carId" element={<Product />} />
                </Route>
                <Route path="/profile" element={<Profile />} />
            </Route>
        </Routes>
    );
};

export default Router;
