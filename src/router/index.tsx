import React from "react";
import { Route, Routes } from "react-router-dom";
import { HeaderHome } from "../components/HeaderHome";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Product } from "../pages/Product";
import { Profile } from "../pages/Profile";
import { Register } from "../pages/Register";
import { TestePage } from "../pages/TestePage";

const Router: React.FC = () => {
    return (
        <Routes>
            <Route element={<HeaderHome />}>
                <Route path="/" element={<Login />} />
                <Route path="/testePage" element={<TestePage />} />
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
