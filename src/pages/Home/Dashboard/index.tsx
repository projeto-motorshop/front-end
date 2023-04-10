import React from "react";
import { DashboardStyle } from "./style";
import { CardCar } from "../CardCar";
import { FilterCar } from "../FilterCar";

export function Dashboard() {
    return (
        <DashboardStyle>
            <FilterCar />
            <CardCar />
        </DashboardStyle>
    );
}
