import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { Product } from "../pages/Product";
import { Register } from "../pages/Register";
import { HeaderHome } from "../components/HeaderHome";
import { FooterHome } from "../components/FooterHome";

const Router: React.FC = () => {
    return (
        <Routes>
            <Route element={<HeaderHome />}>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<Home />} />
                <Route path="/product">
                    <Route path=":carId" element={<Product />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default Router;
