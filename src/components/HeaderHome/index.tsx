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
import { Link, Outlet } from "react-router-dom";

export function HeaderHome() {
    const { isMobile, isFullHd } = useUserContext();
    const [user, setUser] = useState("");

    // const user = {
    //     salesman: false,
    //     name: "victor henrique",
    //     img: "https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1610912652422-5DB14EV6QR7GBFBE9U2W/41.jpg",
    // };

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
                <Box>
                    {user ? (
                        <UserLogged teste={user} />
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
