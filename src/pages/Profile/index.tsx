import { Flex, Box, Wrap, Text } from "@chakra-ui/react";
import { FooterHome } from "../../components/FooterHome";
import { CardUser } from "./CardUser";
import { CardCarProfile } from "./CardCarProfile";
import { useUserContext } from "../../providers/UserContext";
import { useEffect, useState } from "react";
import { useCarContext } from "../../providers/CarContext";
import api from "../../service/api";

export function Profile() {
    const { isMobile, isFullHd, user, loadUser } = useUserContext();

    useEffect(() => {
        loadUser();
    }, []);

    return (
        <>
            <Flex flexDir="column">
                <Box w="100%" height="23rem" pos="absolute" bg="brand.1" />
                <Box pb={"2rem"}>
                    <CardUser />
                </Box>
                <Flex justifyContent={"center"} h={"100%"}>
                    {user?.cars.length == 0 ? (
                        <Flex
                            w={"100%"}
                            h={"20vh"}
                            justifyContent={"center"}
                            alignItems={"center"}
                        >
                            <Text
                                fontSize={isMobile ? "2rem" : "1.5rem"}
                                fontWeight={"bold"}
                            >
                                Adicione seu Anuncio
                            </Text>
                        </Flex>
                    ) : isMobile ? (
                        <Wrap overflow={"hidden"} w={"80%"} p={"1rem"}>
                            <CardCarProfile />
                        </Wrap>
                    ) : (
                        <Flex gap={"1.5rem"} overflow={"auto"} py={"2rem"}>
                            <CardCarProfile />;
                        </Flex>
                    )}
                </Flex>
            </Flex>
            <FooterHome />
        </>
    );
}
