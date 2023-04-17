import {
    Box,
    Text,
    Flex,
    Button,
    Stack,
    Portal,
    useMediaQuery,
} from "@chakra-ui/react";
import { UserLogged } from "./UserLogged";
import { BtnLogin } from "./BtnLogin";
import { MenuHamb } from "./MenuHamb";
import { useState } from "react";
import { useUserContext } from "../../providers/UserContext";
import { Outlet } from "react-router-dom";

export function HeaderHome() {
    const { isMobile, isFullHd } = useUserContext();
    const [user, setUser] = useState("a");

    return (
        <>
            <Flex
                bg="whiteFixed"
                w="100%"
                h="20"
                px={5}
                borderBottom="1px"
                borderColor="grey.6"
                align={"center"}
                justify={isFullHd ? "space-evenly" : "space-between"}
            >
                <Box display="flex" alignItems="center">
                    <Text
                        bgGradient="linear(to-r, grey.1 40%, brand.1 60%)"
                        bgClip="text"
                        fontSize={isMobile ? "2rem" : "1rem"}
                        fontWeight="extrabold"
                    >
                        Motors Shop
                    </Text>
                </Box>
                <Box>
                    {user ? (
                        <UserLogged />
                    ) : isMobile ? (
                        <BtnLogin />
                    ) : (
                        <MenuHamb />
                    )}
                </Box>
            </Flex>
            <Outlet />
        </>
    );
}
