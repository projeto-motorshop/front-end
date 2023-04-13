import {
    Button,
    Center,
    Flex,
    Input,
    List,
    ListItem,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import { useUserContext } from "../../../providers/UserContext";

export function FilterCar({ close }: any) {
    const { isMobile } = useUserContext();
    return (
        <>
            <Flex flexDirection={"column"} paddingLeft={"1rem"}>
                <Text fontWeight={"600"} fontSize={"28px"}>
                    Marca
                </Text>
                <List spacing={3} w={"100%"} p={"1rem"}>
                    <ListItem cursor={"pointer"}>General Motors</ListItem>
                    <ListItem cursor={"pointer"}>Ford</ListItem>
                    <ListItem cursor={"pointer"}>Honda</ListItem>
                    <ListItem cursor={"pointer"}>Porsche</ListItem>
                    <ListItem cursor={"pointer"}>Volswagen</ListItem>
                    <ListItem cursor={"pointer"}>Fiat</ListItem>
                </List>
            </Flex>
            <Flex flexDirection={"column"} paddingLeft={"1rem"}>
                <Text fontWeight={"600"} fontSize={"28px"}>
                    Modelo
                </Text>
                <List spacing={3} w={"100%"} p={"1rem"}>
                    <ListItem cursor={"pointer"}></ListItem>
                    <ListItem cursor={"pointer"}>Ford</ListItem>
                    <ListItem cursor={"pointer"}>Honda</ListItem>
                    <ListItem cursor={"pointer"}>Porsche</ListItem>
                    <ListItem cursor={"pointer"}>Volswagen</ListItem>
                    <ListItem cursor={"pointer"}>Fiat</ListItem>
                </List>
            </Flex>
            <Flex flexDirection={"column"} paddingLeft={"1rem"}>
                <Text fontWeight={"600"} fontSize={"28px"}>
                    Cor
                </Text>
                <List spacing={3} w={"100%"} p={"1rem"}>
                    <ListItem cursor={"pointer"}></ListItem>
                    <ListItem cursor={"pointer"}>Ford</ListItem>
                    <ListItem cursor={"pointer"}>Honda</ListItem>
                    <ListItem cursor={"pointer"}>Porsche</ListItem>
                    <ListItem cursor={"pointer"}>Volswagen</ListItem>
                    <ListItem cursor={"pointer"}>Fiat</ListItem>
                </List>
            </Flex>
            <Flex flexDirection={"column"} paddingLeft={"1rem"}>
                <Text fontWeight={"600"} fontSize={"28px"}>
                    Ano
                </Text>
                <List spacing={3} w={"100%"} p={"1rem"}>
                    <ListItem cursor={"pointer"}></ListItem>
                    <ListItem cursor={"pointer"}>Ford</ListItem>
                    <ListItem cursor={"pointer"}>Honda</ListItem>
                    <ListItem cursor={"pointer"}>Porsche</ListItem>
                    <ListItem cursor={"pointer"}>Volswagen</ListItem>
                    <ListItem cursor={"pointer"}>Fiat</ListItem>
                </List>
            </Flex>
            <Flex flexDirection={"column"} paddingLeft={"1rem"}>
                <Text fontWeight={"600"} fontSize={"28px"}>
                    Combustível
                </Text>
                <List spacing={3} w={"100%"} p={"1rem"}>
                    <ListItem cursor={"pointer"}>Diesel</ListItem>
                    <ListItem cursor={"pointer"}>Etanol</ListItem>
                    <ListItem cursor={"pointer"}>Gasolina</ListItem>
                    <ListItem cursor={"pointer"}>Flex</ListItem>
                    <ListItem cursor={"pointer"}>Eletrico</ListItem>
                    <ListItem cursor={"pointer"}>
                        Combustivel de foguete
                    </ListItem>
                </List>
                <Flex flexDirection={"column"} gap={"1rem"} mb={"1rem"}>
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
                <Flex flexDirection={"column"} gap={"1rem"}>
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
                            >
                                Limpar Filtros
                            </Button>
                        </>
                    ) : (
                        <>
                            {" "}
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
                        </>
                    )}
                </Center>
            </Flex>
        </>
    );
}
