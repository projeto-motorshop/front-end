import {
    Button,
    Center,
    Flex,
    Input,
    List,
    ListItem,
    Text,
} from "@chakra-ui/react";
import cars from "../../../components-moks";
import { useUserContext } from "../../../providers/UserContext";

export function FilterCar({ close, filtered, setFilteredCars }: any) {
    const { isMobile } = useUserContext();

    let brands = [...new Set(filtered.map((car: any) => car.brand))];
    let models = [...new Set(filtered.map((car: any) => car.model))];
    let colors = [...new Set(filtered.map((car: any) => car.color))];
    let fuels = [...new Set(filtered.map((car: any) => car.fuel))];
    let years = [...new Set(filtered.map((car: any) => car.year))];

    const filterCars = (value: any, type: string) => {
        //TODO:finge q chama a api
        const carsFilter = filtered.filter((car: any) => car[type] == value);
        setFilteredCars(carsFilter);
        console.log(carsFilter);
    };

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
                >
                    {brands.map((elem: any) => {
                        return (
                            <>
                                <ListItem
                                    cursor={"pointer"}
                                    key={elem}
                                    onClick={(e) => {
                                        filterCars(elem, "brand");
                                    }}
                                >
                                    {elem}
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
                >
                    {models.map((elem: any) => {
                        return (
                            <>
                                <ListItem
                                    cursor={"pointer"}
                                    key={elem}
                                    onClick={(e) => {
                                        filterCars(elem, "model");
                                    }}
                                >
                                    {elem}
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
                >
                    {colors.map((elem: any) => {
                        return (
                            <>
                                <ListItem
                                    cursor={"pointer"}
                                    key={elem}
                                    onClick={(e) => {
                                        filterCars(elem, "color");
                                    }}
                                >
                                    {elem}
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
                >
                    {years.map((elem: any) => {
                        return (
                            <>
                                <ListItem
                                    cursor={"pointer"}
                                    key={elem}
                                    onClick={(e) => {
                                        filterCars(elem, "year");
                                    }}
                                >
                                    {elem}
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
                <List spacing={3} overflow={"auto"} w={"100%"} p={"1rem"}>
                    {fuels.map((elem: any) => {
                        return (
                            <>
                                <ListItem
                                    cursor={"pointer"}
                                    key={elem}
                                    onClick={(e) => {
                                        filterCars(elem, "fuel");
                                    }}
                                >
                                    {elem}
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
                    />
                    <Input
                        htmlSize={6}
                        width="auto"
                        placeholder="Máxima"
                        bg={"grey.5"}
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
                    />
                    <Input
                        htmlSize={6}
                        width="auto"
                        placeholder="Máxima"
                        bg={"grey.5"}
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
                            onClick={(e) => {
                                setFilteredCars(cars);
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
                                onClick={(e) => {
                                    setFilteredCars(cars);
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
                                onClick={close}
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
