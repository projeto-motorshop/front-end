import {
    Button,
    Center,
    Flex,
    Input,
    List,
    ListItem,
    Text,
} from "@chakra-ui/react";
import { useUserContext } from "../../../providers/UserContext";
import { ICarsRequest } from "../../../interfaces/car";
import { ReactNode, useEffect, useState } from "react";
import { useCarContext } from "../../../providers/CarContext";

const minMax = (recentCar: any, attributes: any) => {
    let ans = Object.fromEntries(
        attributes.map((attr: any) => [attr, { min: null, max: null }])
    );

    recentCar.forEach((car: any) => {
        attributes.forEach((attribute: any) => {
            if (ans[attribute]["min"] == null)
                ans[attribute]["min"] = car[attribute];
            if (ans[attribute]["max"] == null)
                ans[attribute]["max"] = car[attribute];

            if (car[attribute] < ans[attribute]["min"])
                ans[attribute]["min"] = car[attribute];
            if (car[attribute] > ans[attribute]["max"])
                ans[attribute]["max"] = car[attribute];
        });
    });
    return ans;
};

export function FilterCar() {
    const rangedAttributes = ["mileage", "price"];
    const cleanFilters = {
        brand: [],
        model: [],
        color: [],
        fuel: [],
        year: [],
        price: { min: null, max: null },
        mileage: { min: null, max: null },
    };

    const { isMobile, onClose } = useUserContext();
    const { recentCar, setRecentCar, loadCar, filteredCars, setFilteredCars } =
        useCarContext();
    const minMaxAttributes = minMax(recentCar, rangedAttributes);

    let brands = [
        ...new Set(filteredCars.map((car: ICarsRequest) => car.brand)),
    ];
    let models = [
        ...new Set(filteredCars.map((car: ICarsRequest) => car.model)),
    ];
    let colors = [
        ...new Set(filteredCars.map((car: ICarsRequest) => car.color)),
    ];
    let fuels = [...new Set(filteredCars.map((car: ICarsRequest) => car.fuel))];
    let years = [...new Set(filteredCars.map((car: ICarsRequest) => car.year))];

    const [filters, setFilters] = useState(cleanFilters);

    // useEffect(() => {
    //     console.log(filters);
    //     const carsFilter = recentCar.filter((car: any) => {
    //         for (const filter in filters) {
    //             console.log(`
    //                 filter => ${filter}
    //                 car[filter] => ${car[filter]},
    //                 filters[filter] => ${filters[filter]},
    //             `);
    //             if (rangedAttributes.includes(filter)) {
    //                 if (
    //                     !(
    //                         car[filter] >=
    //                             (filters[filter]["min"] ||
    //                                 minMaxAttributes[filter]["min"]) &&
    //                         car[filter] <=
    //                             (filters[filter]["max"] ||
    //                                 minMaxAttributes[filter]["max"])
    //                     )
    //                 )
    //                     return false;
    //             }
    //             if (
    //                 !filters[filter].includes(car[filter]) &&
    //                 !filters[filter] == []
    //             )
    //                 return false;
    //         }
    //         return true;
    //     });
    //     setFilteredCars(carsFilter);
    // }, [filters]);
    const [minValueKm, setMinValueKm] = useState(1000);
    const [maxValueKm, setMaxValueKm] = useState(1500000);
    const [minValuePrice, setMinValuePrice] = useState(1000);
    const [maxValuePrice, setMaxValuePrice] = useState(1500000);
    const [precosFiltrados, setPrecosFiltrados] = useState([]);

    // function valorMinimo(valor, precos) {
    //     return precos.filter((p) => p <= valor);
    // }

    // function valorMaximo(valor, precos) {
    //     return precos.filter((p) => p >= valor);
    // }

    // function precosEntre(valorMenor: any, valorMaior: any, precos: any) {
    //     return valorMaximo(valorMenor, valorMinimo(valorMaior, precos));
    // }
    // const preco = recentCar.map((elem) => elem.price);
    // console.log(precosEntre(minValueKm, maxValueKm, preco));

    return (
        <>
            <Flex flexDirection={"column"} paddingLeft={"1rem"}>
                <Text fontWeight={"600"} fontSize={"28px"}>
                    Marca
                </Text>
                <List
                    spacing={3}
                    overflow={"auto"}
                    h={"11rem"}
                    w={"100%"}
                    p={"1rem"}
                    key={"Marca"}
                >
                    {brands.map((elem, index) => {
                        return (
                            <>
                                <ListItem
                                    cursor={"pointer"}
                                    key={index}
                                    onClick={() => {
                                        setFilters({
                                            ...filters,
                                            brand: [
                                                ...new Set([
                                                    ...filters.brand,
                                                    elem,
                                                ]),
                                            ],
                                        });
                                    }}
                                >
                                    {elem as ReactNode}
                                </ListItem>
                            </>
                        );
                    })}
                </List>
            </Flex>
            <Flex flexDirection={"column"} paddingLeft={"1rem"}>
                <Text fontWeight={"600"} fontSize={"28px"}>
                    Modelo
                </Text>
                <List
                    spacing={3}
                    overflow={"auto"}
                    h={"11rem"}
                    w={"100%"}
                    p={"1rem"}
                    key={"Modelo"}
                >
                    {models.map((elem, index) => {
                        return (
                            <>
                                <ListItem
                                    cursor={"pointer"}
                                    key={index}
                                    onClick={() => {
                                        setFilters({
                                            ...filters,
                                            model: [
                                                ...new Set([
                                                    ...filters.model,
                                                    elem,
                                                ]),
                                            ],
                                        });
                                    }}
                                >
                                    {elem as ReactNode}
                                </ListItem>
                            </>
                        );
                    })}
                </List>
            </Flex>
            <Flex flexDirection={"column"} paddingLeft={"1rem"}>
                <Text fontWeight={"600"} fontSize={"28px"}>
                    Cor
                </Text>
                <List
                    spacing={3}
                    w={"100%"}
                    p={"1rem"}
                    overflow={"auto"}
                    h={"11rem"}
                    key={"Cor"}
                >
                    {colors.map((elem, index) => {
                        return (
                            <>
                                <ListItem
                                    cursor={"pointer"}
                                    key={index}
                                    onClick={() => {
                                        setFilters({
                                            ...filters,
                                            color: [
                                                ...new Set([
                                                    ...filters.color,
                                                    elem,
                                                ]),
                                            ],
                                        });
                                    }}
                                >
                                    {elem as ReactNode}
                                </ListItem>
                            </>
                        );
                    })}
                </List>
            </Flex>
            <Flex flexDirection={"column"} paddingLeft={"1rem"}>
                <Text fontWeight={"600"} fontSize={"28px"}>
                    Ano
                </Text>
                <List
                    spacing={3}
                    overflow={"auto"}
                    h={"11rem"}
                    w={"100%"}
                    p={"1rem"}
                    key={"Ano"}
                >
                    {years.map((elem, index) => {
                        return (
                            <>
                                <ListItem
                                    cursor={"pointer"}
                                    key={index}
                                    onClick={() => {
                                        setFilters({
                                            ...filters,
                                            year: [
                                                ...new Set([
                                                    ...filters.year,
                                                    elem,
                                                ]),
                                            ],
                                        });
                                    }}
                                >
                                    {elem as ReactNode}
                                </ListItem>
                            </>
                        );
                    })}
                </List>
            </Flex>
            <Flex flexDirection={"column"} paddingLeft={"1rem"}>
                <Text fontWeight={"600"} fontSize={"28px"}>
                    Combustível
                </Text>
                <List
                    spacing={3}
                    overflow={"auto"}
                    w={"100%"}
                    p={"1rem"}
                    key={"Combustivel"}
                >
                    {fuels.map((elem, index) => {
                        return (
                            <>
                                <ListItem
                                    cursor={"pointer"}
                                    key={index}
                                    onClick={() => {
                                        setFilters({
                                            ...filters,
                                            fuel: [
                                                ...new Set([
                                                    ...filters.fuel,
                                                    elem,
                                                ]),
                                            ],
                                        });
                                    }}
                                >
                                    {elem as ReactNode}
                                </ListItem>
                            </>
                        );
                    })}
                </List>
            </Flex>
            <Flex
                flexDirection={"column"}
                gap={"1rem"}
                alignItems={"center"}
                p={"1rem"}
            >
                <Text fontWeight={"600"} fontSize={"28px"}>
                    Km
                </Text>
                <Flex gap={"1rem"}>
                    <Input
                        htmlSize={6}
                        width="auto"
                        placeholder="Mínima"
                        bg={"grey.5"}
                        onKeyUp={(e) => {
                            setFilters({
                                ...filters,
                                mileage: {
                                    ...filters.mileage,
                                    min: e.target.value,
                                },
                            });
                        }}
                    />
                    <Input
                        htmlSize={6}
                        width="auto"
                        placeholder="Máxima"
                        bg={"grey.5"}
                        onKeyUp={(e) => {
                            setFilters({
                                ...filters,
                                mileage: {
                                    ...filters.mileage,
                                    max: e.target.value,
                                },
                            });
                        }}
                    />
                </Flex>
            </Flex>
            <Flex
                flexDirection={"column"}
                gap={"1rem"}
                alignItems={"center"}
                px={"1rem"}
            >
                <Text fontWeight={"600"} fontSize={"28px"}>
                    Preço
                </Text>
                <Flex gap={"1rem"}>
                    <Input
                        htmlSize={6}
                        width="auto"
                        placeholder="Mínima"
                        bg={"grey.5"}
                        onKeyUp={(e) => {
                            setFilters({
                                ...filters,
                                price: {
                                    ...filters.mileage,
                                    min: e.target.value,
                                },
                            });
                        }}
                    />
                    <Input
                        htmlSize={6}
                        width="auto"
                        placeholder="Máxima"
                        bg={"grey.5"}
                        onKeyUp={(e) => {
                            setFilters({
                                ...filters,
                                price: {
                                    ...filters.mileage,
                                    max: e.target.value,
                                },
                            });
                        }}
                    />
                </Flex>
            </Flex>
            <Center>
                {isMobile ? (
                    <>
                        <Button
                            mt={"2rem"}
                            bg={"brand.2"}
                            color={"white"}
                            borderRadius={"4px"}
                            mb={"1rem"}
                            _hover={{ bg: "brand.4", color: "brand.1" }}
                            onClick={() => {
                                setFilters(cleanFilters);
                            }}
                        >
                            Limpar Filtros
                        </Button>
                    </>
                ) : (
                    <>
                        <Flex gap={"2rem"}>
                            <Button
                                mt={"2rem"}
                                bg={"brand.2"}
                                color={"white"}
                                borderRadius={"4px"}
                                mb={"1rem"}
                                _hover={{ bg: "brand.4", color: "brand.1" }}
                                onClick={() => {
                                    setFilters(cleanFilters);
                                }}
                            >
                                Limpar Filtros
                            </Button>
                            <Button
                                mt={"2rem"}
                                bg={"brand.2"}
                                color={"white"}
                                borderRadius={"4px"}
                                mb={"1rem"}
                                _hover={{ bg: "brand.4", color: "brand.1" }}
                                onClick={onClose}
                            >
                                Ver Anuncios
                            </Button>
                        </Flex>
                    </>
                )}
            </Center>
        </>
    );
}
