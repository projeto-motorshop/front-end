import React from "react";
import { DashboardStyle } from "./style";
import { CardCar } from "../CardCar";
import { FilterCar } from "../FilterCar";
import { MenuHamb } from "../../../components/HeaderHome/MenuHamb";

export function Dashboard() {
    return (
        <DashboardStyle>
            <FilterCar />
            <CardCar />
            <MenuHamb />
        </DashboardStyle>
    );
}
