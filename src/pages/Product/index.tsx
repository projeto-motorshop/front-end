import { Box, Center, Flex, Text } from "@chakra-ui/react";
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
import { useCommentContext } from "../../providers/CommentContext";

export function Product() {
    const { carId } = useParams();
    const { setCar } = useCarContext();
    const { isMobile } = useUserContext();
    const { comment } = useCommentContext();

    useEffect(() => {
        const loadProduct = async () => {
            try {
                const { data } = await api.get(`/cars/${carId}`);
                setCar(data);
            } catch (error) {
                console.log(error);
            }
        };

        loadProduct();
    }, [comment]);

    return (
        <>
            <Box w="100%" height="38rem" pos="absolute" bg="brand.1" />
            <Flex
                flexDir={isMobile ? "row" : "column"}
                justifyContent="center"
                zIndex={10}
                pos="relative"
                left="0"
                right="0"
                bg={"grey.9"}
                top="0"
                bottom="0"
                margin="auto"
            >
                <Flex flexDir="column">
                    {isMobile ? (
                        <Flex
                            justifyContent="space-between"
                            margin="auto"
                            w="80%"
                        >
                            <Flex flexDir="column" w="70%">
                                <Center flexDir="column" mr={30} w="100%">
                                    <CardCar />
                                    <Description />
                                </Center>
                                <Flex w="100%" justifyContent="flex-start">
                                    <Center flexDir="column" w="100%">
                                        <ListComment />
                                        <CreateComment />
                                    </Center>
                                </Flex>
                            </Flex>
                            <Flex
                                flexDir="column"
                                justifyContent="flex-start"
                                w="29%"
                            >
                                <CardPictures />
                                <CardUser />
                            </Flex>
                        </Flex>
                    ) : (
                        <Flex flexDir="column">
                            <Flex flexDir="column" ml="2%" mr="2%">
                                <Center flexDir="column">
                                    <CardCar />
                                    <Description />
                                </Center>
                                <Flex flexDir="column">
                                    <CardPictures />
                                    <CardUser />
                                </Flex>
                            </Flex>
                            <Flex flexDir="column" ml="2%" mr="2%">
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
