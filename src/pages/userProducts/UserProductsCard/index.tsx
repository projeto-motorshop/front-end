import { useNavigate } from "react-router";

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

export function UserProductsCard(): any {
    const { isMobile, isFullHd, userData } = useUserContext();
    const navigate = useNavigate();

    const navigateToProduct = (id: string) => {
        navigate(`/product/${id}`);
    };

    return (
        <>
            {userData?.cars?.map((elem: any) => {
                return (
                    <>
                        <Flex

                            align="flex-start"
                            justifyContent={"flex-start"}
                            w={isFullHd ? "70%" : isMobile ? "80%" : "100%"}
                            flexDirection={"row"}
                            margin={"0 auto"}
                            mt={"7rem"}
                            mb={"18px"}
                            onClick={() => {
                                navigateToProduct(elem.id);
                            }}
                            cursor="pointer"
                            key={elem.id}
                        >
                            <Flex
                                w={"90%"}
                                p={3}
                                flexDirection={"column"}
                                gap={"30px"}
                                height={"30rem"}
                                pos={"relative"}
                            >
                                <Flex
                                    pos={"relative"}
                                    h={isMobile ? "14rem" : "14rem"}
                                    w={"110%"}
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
                                    {elem.isPublished ? (
                                        <Flex
                                            pos={"absolute"}
                                            left="4px"
                                            top={"5px"}
                                            zIndex={3}
                                            bg={"brand.1"}
                                            h={"1.5rem"}
                                            alignItems={"center"}
                                            borderRadius={"2px"}
                                        >
                                            <Badge
                                                bg={"brand.1"}
                                                color={"white"}
                                                fontSize={"0.875rem"}
                                                fontWeight={"500"}
                                            >
                                                Ativo
                                            </Badge>
                                        </Flex>
                                    ) : (
                                        <>
                                            <Flex
                                                pos={"absolute"}
                                                w={"100%"}
                                                left="4px"
                                                top={"5px"}
                                                zIndex={3}
                                                bg={"grey.4"}
                                                h={"1.5rem"}
                                                alignItems={"center"}
                                                borderRadius={"2px"}
                                            >
                                                <Badge
                                                    bg={"grey.4"}
                                                    color={"white"}
                                                    fontSize={"0.875rem"}
                                                    fontWeight={"500"}
                                                >
                                                    Inativo
                                                </Badge>
                                            </Flex>
                                        </>
                                    )}

                                    <Image
                                        src={elem.frontImg}
                                        alt={elem.model}
                                        pos={"relative"}
                                        objectFit={"cover"}
                                        w={"100%"}
                                        h={"200px"}
                                    />
                                </Flex>

                                <Flex flexDirection={"column"} gap={"1rem"}>
                                    <Text fontWeight={"800"} h={"47px"}>
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
                                            name={elem.brand}
                                            src={elem.frontImg}
                                        />
                                        <Text
                                            fontWeight={"700"}
                                            fontSize={
                                                isMobile ? "14px" : "10px"
                                            }
                                        >
                                            {elem.brand}
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
