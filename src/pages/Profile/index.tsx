import { Flex, Box } from "@chakra-ui/react";
import { FooterHome } from "../../components/FooterHome";
import { CardCar } from "./CardCar";
import { CardUser } from "./CardUser";
import { ListCars } from "./ListCars";

export function Profile() {
    return (
        <>
            <Flex
                flexDir="column"
            >
                <Box
                    w="100%"
                    height="23rem"
                    pos="absolute"
                    bg="var(--brand1)"
                />
                <CardUser />
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
            </Flex>
            <FooterHome />
        </>
    )
}