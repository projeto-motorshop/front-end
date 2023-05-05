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
import { useUserContext } from "../../providers/UserContext";
import { Link, Outlet } from "react-router-dom";

export function HeaderHome() {
    const { isMobile, isFullHd, user } = useUserContext();

    return (
        <>
            <Flex
                bg="whiteFixed"
                w="100%"
                h="10vh"
                px={5}
                borderBottom="1px"
                borderColor="grey.6"
                align={"center"}
                justify={isFullHd ? "space-evenly" : "space-between"}
                pos={"relative"}
                zIndex={"1000"}
                top={"0"}
            >
                <Box display="flex" alignItems="center">
                    <Link to="/home">
                        <Text
                            bgGradient="linear(to-r, grey.1 40%, brand.1 60%)"
                            bgClip="text"
                            fontSize={isMobile ? "2rem" : "1rem"}
                            fontWeight="extrabold"
                        >
                            Motors Shop
                        </Text>
                    </Link>
                </Box>
                <Flex
                    h="100%"
                    borderLeft="1px"
                    borderColor="grey.6"
                    align="center"
                    justify="center"
                    pl={"1rem"}
                >
                    {user ? (
                        <UserLogged />
                    ) : isMobile ? (
                        <BtnLogin />
                    ) : (
                        <MenuHamb />
                    )}
                </Flex>
            </Flex>
            <Outlet />
        </>
    );
}
