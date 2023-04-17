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
            <Box
                w="100%"
                height="38rem"
                pos="absolute"
                bg="var(--brand1)"
            />
            <Flex
                flexDir={isMobile ? "row" : "column"}
                justifyContent="center"
                zIndex={10}
                pos="relative"
                left="0"
                right="0"
                top="0"
                bottom="0"
                margin="auto"
            >
                <Flex
                    flexDir="column"
                >
                    {
                        isMobile ?
                            (
                                <Flex
                                    flexDir="column"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Flex
                                        justifyContent="center"
                                    >
                                        <Center
                                            flexDir="column"
                                            mr={30}
                                            w="39%"
                                        >
                                            <CardCar />
                                            <Description />
                                        </Center>

                                        <Flex
                                            flexDir="column"
                                            justifyContent="flex-start"
                                            w="23%"
                                        >
                                            <CardPictures />
                                            <CardUser />
                                        </Flex>
                                    </Flex>
                                    <Flex
                                        justifyContent="flex-start"
                                        w="63%"
                                    >
                                        <Center
                                            flexDir="column"
                                            w="62%"
                                        >
                                            <ListComment />
                                            <CreateComment />
                                        </Center>
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
                                        ml="2%"
                                        mr="2%"
                                    >
                                        <Center
                                            flexDir={"column"}
                                            mb="10rem"
                                        >
                                            <CardCar />
                                            <Description />
                                        </Center>
                                        <Flex
                                            flexDir={"column"}
                                        >
                                            <CardPictures />
                                            <CardUser />
                                        </Flex>
                                    </Flex>
                                    <Flex
                                        flexDir={"column"}
                                        ml="2%"
                                        mr="2%"
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