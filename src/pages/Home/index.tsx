import React from "react";
import { HeaderHome } from "../../components/HeaderHome";
import { HomeStyle } from "./style";
import { BannerHome } from "./BannerHome";
import { Dashboard } from "./Dashboard";
import { FooterHome } from "../../components/FooterHome";

export function Home() {
    return (
        <HomeStyle >
            <HeaderHome />
            <BannerHome />
            <Dashboard />
            <FooterHome />
        </HomeStyle>
    );
}
