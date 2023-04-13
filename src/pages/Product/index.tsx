import { Box, Center, Flex } from "@chakra-ui/react";
import { CardCar } from "./CardCar";
import { CardPictures } from "./CardPictures";
import { CardUser } from "./CardUser";
import { CreateComment } from "./CreateComments";
import { Description } from "./Description";
import { ListComment } from "./ListComments";
import { HeaderHome } from "../../components/HeaderHome";
import { FooterHome } from "../../components/FooterHome";


export function Product () {
    return (
        <>
            <HeaderHome />
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
            <FooterHome />
        </>
    )
}