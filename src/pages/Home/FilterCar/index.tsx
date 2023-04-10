import React from "react";
import { FilterStyle } from "./style";

export function FilterCar() {
    return (
        <FilterStyle>
            <div className="divFilter">
                <p>Marca</p>
                <ul>
                    <li>General Motors</li>
                    <li>FiatFord</li>
                    <li>Honda</li>
                    <li>Porsche</li>
                    <li>Volswagen</li>
                </ul>
            </div>

            <div className="divFilter">
                <p>Modelo</p>
                <ul>
                    <li>Civic</li>
                    <li>Corolla</li>
                    <li>Cruze</li>
                    <li>Fit</li>
                    <li>Gol</li>
                    <li>Ka</li>
                    <li>Onix</li>
                </ul>
            </div>

            <div className="divFilter">
                <p>Cor</p>
                <ul>
                    <li>Azul</li>
                    <li>Branco</li>
                    <li>Cinza</li>
                    <li>Prata</li>
                    <li>Preto</li>
                    <li>Verde</li>
                </ul>
            </div>

            <div className="divFilter">
                <p>Ano</p>
                <ul>
                    <li>2023</li>
                    <li>2022</li>
                    <li>2021</li>
                    <li>2020</li>
                    <li>2019</li>
                    <li>2018</li>
                </ul>
            </div>

            <div className="divFilter">
                <p>Combustivel</p>
                <ul>
                    <li>Diesel</li>
                    <li>Etanol</li>
                    <li>Gasolina</li>
                    <li>Flex</li>
                </ul>
            </div>
        </FilterStyle>
    );
}
