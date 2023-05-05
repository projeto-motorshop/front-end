import {
    Avatar,
    Badge,
    Box,
    Center,
    Flex,
    Image,
    Text,
} from "@chakra-ui/react";
import { MdAttachMoney } from "react-icons/md";
import { useUserContext } from "../../../providers/UserContext";
import { useNavigate } from "react-router";
import { ICarsResponse } from "../../../interfaces/car";
import { useCarContext } from "../../../providers/CarContext";

export function CardCar() {
    const { isMobile, isFullHd } = useUserContext();
    const { filteredCars, filter, recentCar } = useCarContext();
    const navigate = useNavigate();

    const navigateToCar = (id: string) => {
        navigate(`/product/${id}`);
    };

    return (
        <>
            {(!!Object.values(filter).every(f => f === "")
                ? filteredCars
                : recentCar
            )?.map((elem: ICarsResponse) => {
                return (
                    <>
                        <Flex
                            align="flex-start"
                            justifyContent={"flex-start"}
                            w={isFullHd ? "30%" : isMobile ? "32%" : "100%"}
                            flexDirection={"row"}
                            onClick={() => navigateToCar(elem.id)}
                            cursor="pointer"
                            key={elem.id}
                        >
                            <Flex
                                w={"100%"}
                                p={3}
                                flexDirection={"column"}
                                gap={"2rem"}
                                pos={"relative"}
                            >
                                <Flex
                                    pos={"relative"}
                                    h={isMobile ? "17rem" : "8rem"}
                                    border={"2px solid transparent"}
                                    _hover={{ border: "2px solid #4529E6" }}
                                >
                                    {elem.goodDeal ? (
                                        <Flex
                                            pos={"absolute"}
                                            right="4px"
                                            top={"5px"}
                                            zIndex={3}
                                            bg={"random.7"}
                                            h={"1.5rem"}
                                            alignItems={"center"}
                                            borderRadius={"2px"}
                                        >
                                            <Badge
                                                bg={"random.7"}
                                                color={"white"}
                                                fontSize={"1rem"}
                                                fontWeight={"500"}
                                            >
                                                <MdAttachMoney />
                                            </Badge>
                                        </Flex>
                                    ) : (
                                        <></>
                                    )}

                                    <Image
                                        src={elem.frontImg}
                                        alt={elem.model}
                                        pos={"relative"}
                                        objectFit={"cover"}
                                    />
                                </Flex>

                                <Flex flexDirection={"column"} gap={"1rem"}>
                                    <Text fontWeight={"800"}>
                                        {elem.brand} - {elem.model}
                                    </Text>
                                    <Box
                                        mt="1"
                                        fontWeight="500"
                                        as="h4"
                                        lineHeight="tight"
                                        noOfLines={3}
                                        fontFamily={"inter"}
                                    >
                                        {elem.description}
                                    </Box>
                                </Flex>
                                <Flex>
                                    <Center gap={isMobile ? "1rem" : ".5rem"}>
                                        <Avatar
                                            name={elem.user.name}
                                            src={elem.user.urlImg}
                                        />
                                        <Text
                                            fontWeight={"700"}
                                            fontSize={
                                                isMobile ? "14px" : "10px"
                                            }
                                        >
                                            {elem.user.name}
                                        </Text>
                                    </Center>
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
                            </Flex>
                        </Flex>
                    </>
                );
            })}
        </>
    );
}
