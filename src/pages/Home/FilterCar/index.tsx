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
import api from "../../../service/api";

export function FilterCar() {
    const { isMobile, onClose } = useUserContext();
    const {
        filteredCars,
        setFilteredCars,
        loadCar,
        typesFuel,
        filter,
        setFilter,
        setRecentCar,
        recentCar,
    } = useCarContext();

    let brands = [...new Set(recentCar?.map((car: ICarsRequest) => car.brand))];
    let models = [...new Set(recentCar.map((car: ICarsRequest) => car.model))];
    let colors = [...new Set(recentCar.map((car: ICarsRequest) => car.color))];
    let fuels = [...new Set(recentCar.map((car: ICarsRequest) => car.fuel))];
    let years = [...new Set(recentCar.map((car: ICarsRequest) => car.year))];

    useEffect(() => {
        const filterCars = async () => {
            try {
                const { data } = await api.get(
                    `/cars/allCars?brand=${filter.brand}&model=${filter.model}&color=${filter.color}&year=${filter.year}&fuel=${filter.fuel}&minKm=${filter.minKm}&maxKm=${filter.maxKm}&minPrice=${filter.minPrice}&maxPrice=${filter.maxPrice}`
                );
                setRecentCar(data);
                // setFilteredCars(data);
            } catch (error) {
                console.log(error);
            }
        };
        filterCars();
    }, [filter]);

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
                                    onClick={() =>
                                        setFilter({ ...filter, brand: elem })
                                    }
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
                                    onClick={() =>
                                        setFilter({ ...filter, model: elem })
                                    }
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
                                    onClick={() =>
                                        setFilter({ ...filter, color: elem })
                                    }
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
                                    onClick={() =>
                                        setFilter({ ...filter, year: elem })
                                    }
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
                                    onClick={() =>
                                        setFilter({ ...filter, fuel: elem })
                                    }
                                >
                                    {typesFuel(elem)}
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
                        onKeyUp={(e) =>
                            setFilter({
                                ...filter,
                                minKm: e.currentTarget.value,
                            })
                        }
                    />
                    <Input
                        htmlSize={6}
                        width="auto"
                        placeholder="Máxima"
                        bg={"grey.5"}
                        onKeyUp={(e) =>
                            setFilter({
                                ...filter,
                                maxKm: e.currentTarget.value,
                            })
                        }
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
                        onKeyUp={(e) =>
                            setFilter({
                                ...filter,
                                minPrice: e.currentTarget.value,
                            })
                        }
                    />
                    <Input
                        htmlSize={6}
                        width="auto"
                        placeholder="Máxima"
                        bg={"grey.5"}
                        onKeyUp={(e) =>
                            setFilter({
                                ...filter,
                                maxPrice: e.currentTarget.value,
                            })
                        }
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
                                setFilter({
                                    brand: "",
                                    model: "",
                                    color: "",
                                    year: "",
                                    fuel: "",
                                    minKm: "",
                                    maxKm: "",
                                    minPrice: "",
                                    maxPrice: "",
                                });
                                loadCar();
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
                                    setFilter({
                                        brand: "",
                                        model: "",
                                        color: "",
                                        year: "",
                                        fuel: "",
                                        minKm: "",
                                        maxKm: "",
                                        minPrice: "",
                                        maxPrice: "",
                                    });
                                    loadCar();
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
                                onClick={() => onClose()}
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
