import { Box, Center, Flex } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { CardCar } from "./CardCar";
import { CardPictures } from "./CardPictures";
import { CardUser } from "./CardUser";
import { CreateComment } from "./CreateComments";
import { Description } from "./Description";
import { ListComment } from "./ListComments";


export function Product () {
    return (
        <>
            <Header />
            <Flex
                justifyContent={"center"}
            >
                <Center
                    flexDir={"column"}
                    mr={30}
                >
                    <CardCar />
                    <Description />
                    <ListComment />
                    <CreateComment />
                </Center>
                <Flex
                    flexDir={"column"}
                >
                    <CardPictures />
                    <CardUser />
                </Flex>
            </Flex>
            <Footer />
        </>
    )
}