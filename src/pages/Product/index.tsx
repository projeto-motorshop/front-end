import { Box, Center, Flex, useMediaQuery } from "@chakra-ui/react";
import { CardCar } from "./CardCar";
import { CardPictures } from "./CardPictures";
import { CardUser } from "./CardUser";
import { CreateComment } from "./CreateComments";
import { Description } from "./Description";
import { ListComment } from "./ListComments";
import { FooterHome } from "../../components/FooterHome";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import api from "../../service/api";
import { useCarContext } from "../../providers/CarContext";
import { useUserContext } from "../../providers/UserContext";

export function Product() {
    // const [isMobile] = useMediaQuery("(min-width: 800px)");

    const { carId } = useParams();
    const { setCar } = useCarContext()
    const { isMobile, isNotebook } = useUserContext()

    useEffect(() => {
        (async () => {
            try {
                const { data } = await api.get(`/cars/${carId}`);
                setCar(data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <>
            <Box
                w="100%"
                height="38rem"
                pos="absolute"
                bg="brand.1"
            />
            <Flex
                flexDir={isMobile ? "row" : "column"}
                justifyContent="center"
                zIndex={10}
                pos="relative"
                left="0"
                right="0"
                top="0"
                bottom="0"
                margin="auto"
            >
                <Flex flexDir="column">
                    {isMobile ? (
                        <Flex
                            border="1px solid red"
                            flexDir="column"
                            justifyContent="center"
                            alignItems="center"
                            ml={5}
                        >
                            <Flex
                                border="1px solid green"
                                justifyContent="flex-start"

                            >
                                <Center
                                    flexDir="column"
                                    mr={30}
                                // w="55%"
                                >
                                    <CardCar />
                                    <Description />
                                </Center>

                                <Flex
                                    flexDir="column"
                                    justifyContent="flex-start"
                                    w="29%"
                                >
                                    <CardPictures />
                                    <CardUser />
                                </Flex>
                            </Flex>
                            <Flex
                                border="1px solid black"
                                // w="78.5%"
                                w={isNotebook ? "78.5%" : "100%"}
                                justifyContent="flex-start"
                                >
                                <Center
                                    bg={isNotebook ? "red" : isMobile ? "green" : "blue"}
                                    flexDir="column"
                                    w={isNotebook ? "53%" : isMobile ? "59%" : "100%"}
                                >
                                    <ListComment />
                                    <CreateComment />
                                </Center>
                            </Flex>
                        </Flex>
                    ) : (
                        <Flex
                            flexDir="column"
                        >
                            <Flex
                                flexDir="column"
                                ml="2%"
                                mr="2%"
                            >
                                <Center
                                    flexDir="column"
                                >
                                    <CardCar />
                                    <Description />
                                </Center>
                                <Flex
                                    flexDir="column"
                                >
                                    <CardPictures />
                                    <CardUser />
                                </Flex>
                            </Flex>
                            <Flex
                                flexDir="column"
                                ml="2%"
                                mr="2%"
                            >
                                <ListComment />
                                <CreateComment />
                            </Flex>
                        </Flex>
                    )}
                </Flex>
            </Flex>
            <FooterHome />
        </>
    );
}
