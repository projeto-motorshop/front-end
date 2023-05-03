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
    const { filteredCars, setFilteredCars, loadCar, typesFuel } =
        useCarContext();
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [color, setColor] = useState("");
    const [year, setYear] = useState("");
    const [fuel, setFuel] = useState("");
    const [minKm, setMinKm] = useState("");
    const [maxKm, setMaxKm] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

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

    useEffect(() => {
        const filterCars = async () => {
            try {
                const { data } = await api.get(
                    `/cars?brand=${brand}&model=${model}&color=${color}&year=${year}&fuel=${fuel}&minKm=${minKm}&maxKm=${maxKm}&minPrice=${minPrice}&maxPrice=${maxPrice}`
                );
                setFilteredCars(data);
            } catch (error) {
                console.log(error);
            }
        };
        filterCars();
    }, [brand, model, color, year, fuel, minKm, maxKm, minPrice, maxPrice]);

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
                                    onClick={() => setBrand(elem)}
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
                                    onClick={() => setModel(elem)}
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
                                    onClick={() => setColor(elem)}
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
                                    onClick={() => setYear(elem)}
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
                                    onClick={() => setFuel(elem)}
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
                        onKeyUp={(e) => setMinKm(e.currentTarget.value)}
                    />
                    <Input
                        htmlSize={6}
                        width="auto"
                        placeholder="Máxima"
                        bg={"grey.5"}
                        onKeyUp={(e) => setMaxKm(e.currentTarget.value)}
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
                        onKeyUp={(e) => setMinPrice(e.currentTarget.value)}
                    />
                    <Input
                        htmlSize={6}
                        width="auto"
                        placeholder="Máxima"
                        bg={"grey.5"}
                        onKeyUp={(e) => setMaxPrice(e.currentTarget.value)}
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
                                setBrand("");
                                setModel("");
                                setColor("");
                                setYear("");
                                setFuel("");
                                setMinKm("");
                                setMaxKm("");
                                setMinPrice("");
                                setMaxPrice("");
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
                                    setBrand("");
                                    setModel("");
                                    setColor("");
                                    setYear("");
                                    setFuel("");
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
