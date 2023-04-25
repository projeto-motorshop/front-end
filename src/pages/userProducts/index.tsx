import { Box, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { FooterHome } from "../../components/FooterHome";
import { useUserContext } from "../../providers/UserContext";
import { CardCar } from "../Home/CardCar";
import { ListCars } from "../Profile/ListCars";
import ProfileDiv from "./profileDiv";

function UserProducts() {

    const { userLogged } = useUserContext();

    useEffect(() => {
        userLogged();
    }, []);

    return (
        <Flex flexDirection={"column"} alignItems={"center"}>

            <Box
                w="100%"
                height="12rem"
                pos="absolute"
                bg="brand.1"
            />
            <Flex bg='#ffffff' h={'200px'} pos={"relative"} w={'80%'} top={'100px'}>
                <ProfileDiv />
            </Flex>
            <ListCars>
                <CardCar />
                <CardCar />
                <CardCar />
                <CardCar />
                <CardCar />
                <CardCar />
                <CardCar />
                <CardCar />
                <CardCar />
            </ListCars>

            <FooterHome />
        </Flex >
    );
}

export default UserProducts
