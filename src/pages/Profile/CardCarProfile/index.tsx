import {
    Avatar,
    Box,
    Button,
    Center,
    Flex,
    Image,
    Text,
} from "@chakra-ui/react";
import { useUserContext } from "../../../providers/UserContext";
import { ICarsResponse } from "../../../interfaces/car";
import { EditAdModal } from "../../../components/RenderModalContent/ModalEditAd";
import { useCarContext } from "../../../providers/CarContext";

export function CardCarProfile() {
    const { isMobile, isFullHd, setOverlay, onOpen, userCar } =
        useUserContext();
    const { setCarId } = useCarContext();
    return (
        <>
            {userCar?.map((elem: ICarsResponse) => {
                return (
                    <>
                        <Flex
                            align="flex-start"
                            justifyContent={"flex-start"}
                            w={
                                isFullHd
                                    ? "calc((100% - 36px) / 4)"
                                    : isMobile
                                    ? "calc((100% - 24px) / 3)"
                                    : "312px"
                            }
                            minW={isMobile ? "" : "312px"}
                            flexDirection={"row"}
                            key={elem.id}
                            onClick={() => {
                                setCarId(elem.id);
                            }}
                        >
                            <Flex
                                w={"100%"}
                                p={3}
                                flexDirection={"column"}
                                gap={"2rem"}
                                pos={"relative"}
                            >
                                <Flex
                                    cursor="pointer"
                                    pos={"relative"}
                                    h={isMobile ? "17rem" : "8rem"}
                                    border={"2px solid transparent"}
                                    borderRadius={4}
                                    _hover={{ border: "2px solid #4529E6" }}
                                >
                                    <Image
                                        borderRadius={4}
                                        src={elem.frontImg}
                                        alt={elem.model}
                                        pos={"relative"}
                                        objectFit={"cover"}
                                    />
                                </Flex>

                                <Flex flexDirection={"column"} gap={"1rem"}>
                                    <Text fontWeight={"800"} noOfLines={1}>
                                        {elem.brand} - {elem.model}
                                    </Text>
                                    <Text
                                        mt="1"
                                        fontWeight="500"
                                        lineHeight="tight"
                                        noOfLines={2}
                                        fontFamily={"inter"}
                                    >
                                        {elem.description}
                                    </Text>
                                </Flex>
                                <Flex
                                    justifyContent="space-between"
                                    gap={"1rem"}
                                >
                                    <Flex gap={".2rem"}>
                                        <Text
                                            bg={"brand.4"}
                                            color={"brand.1"}
                                            p={".5rem"}
                                            borderRadius={"4px"}
                                            w={"100%"}
                                            fontSize={
                                                isMobile ? "14px" : "10px"
                                            }
                                            textAlign={"center"}
                                        >
                                            KM{elem.mileage}
                                        </Text>
                                        <Text
                                            bg={"brand.4"}
                                            color={"brand.1"}
                                            p={".5rem"}
                                            fontSize={
                                                isMobile ? "14px" : "10px"
                                            }
                                            borderRadius={"4px"}
                                        >
                                            {elem.year}
                                        </Text>
                                    </Flex>
                                    <Center>
                                        <Text
                                            fontWeight={"500"}
                                            fontSize={
                                                isMobile ? "14px" : "10px"
                                            }
                                        >
                                            R$
                                            {elem.price.toLocaleString("pt-BR")}
                                        </Text>
                                    </Center>
                                </Flex>
                                <Flex gap={"1.5rem"}>
                                    <Button
                                        variant="outline"
                                        color={"grey.1"}
                                        border={"1px solid"}
                                        _hover={{
                                            bg: "grey.1",
                                            color: "white",
                                        }}
                                        onClick={() => {
                                            setOverlay(<EditAdModal />);
                                            onOpen();
                                        }}
                                    >
                                        Editar
                                    </Button>
                                    <Button
                                        variant="outline"
                                        color={"grey.1"}
                                        border={"1px solid"}
                                        _hover={{
                                            bg: "grey.1",
                                            color: "white",
                                        }}
                                    >
                                        Ver detalhes
                                    </Button>
                                </Flex>
                            </Flex>
                        </Flex>
                    </>
                );
            })}
        </>
    );
}
