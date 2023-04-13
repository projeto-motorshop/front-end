import { Box, Center, Flex, useMediaQuery } from "@chakra-ui/react";
import { CardCar } from "./CardCar";
import { CardPictures } from "./CardPictures";
import { CardUser } from "./CardUser";
import { CreateComment } from "./CreateComments";
import { Description } from "./Description";
import { ListComment } from "./ListComments";
import { HeaderHome } from "../../components/HeaderHome";
import { FooterHome } from "../../components/FooterHome";


export function Product() {

    const [isMobile] = useMediaQuery("(min-width: 800px)")

    return (
        <>
            <HeaderHome />
            <Flex
                flexDir={isMobile ? "row" : "column"}
                justifyContent={"center"}
                zIndex={10}
                pos="relative"
                left="0"
                right="0"
                top="0"
                bottom="0"
                margin="auto"
            >
                <Flex
                    flexDir={"column"}
                >
                    {
                        isMobile ?
                            (
                                <Flex
                                    flexDir="column"
                                >
                                    <Flex>
                                        <Center
                                            flexDir={"column"}
                                            mr={30}
                                        >
                                            <CardCar />
                                            <Description />
                                        </Center>
                                        <Flex
                                            // bg="red"
                                            flexDir={"column"}
                                        >
                                            <CardPictures />
                                            <CardUser />
                                        </Flex>
                                    </Flex>
                                    <Flex
                                        flexDir={"column"}
                                    >
                                        <ListComment />
                                        <CreateComment />
                                    </Flex>
                                </Flex>
                            )
                            :
                            (
                                <Flex
                                    flexDir="column"
                                >
                                    <Flex
                                        flexDir="column"
                                    >
                                        <Center
                                            flexDir={"column"}
                                            mb="10rem"
                                        >
                                            <CardCar />
                                            <Description />
                                        </Center>
                                        <Flex
                                            // bg="red"
                                            flexDir={"column"}
                                        >
                                            <CardPictures />
                                            <CardUser />
                                        </Flex>
                                    </Flex>
                                    <Flex
                                        flexDir={"column"}
                                    >
                                        <ListComment />
                                        <CreateComment />
                                    </Flex>
                                </Flex>
                            )
                    }
                </Flex>
            </Flex>
            <FooterHome />
        </>
    )
}