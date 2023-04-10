import React from "react";
import { HeaderHome } from "../../components/HeaderHome";
import { HomeStyle } from "./style";
import { BannerHome } from "./BannerHome";
import { Dashboard } from "./Dashboard";

export function Home() {
    return (
        <HomeStyle>
            <HeaderHome />
            <BannerHome />
            <Dashboard />
        </HomeStyle>
    );
}
