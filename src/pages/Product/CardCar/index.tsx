import { Box, Button, Container, Flex, Image, Text } from "@chakra-ui/react";


export function CardCar({ }) {
    return (
        <Flex
            flexDir="column"
            mt={30}
        >
            <Flex
                justifyContent="center"
                w="47rem"
                h="22rem"
                bg="#FDFDFD"
                borderRadius={4}
            >
                <Image src={"../../../../public/card-image.svg"} />
            </Flex>

            <Flex
                flexDir={"column"}
                justifyContent="space-around"
                w="47rem"
                h="15rem"
                mt={20}
                p="2.5rem"
                bg="#FDFDFD"
                borderRadius={4}
            >
                <Text
                    fontSize={20}
                >
                    Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200
                </Text>

                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Flex
                        gap={15}
                    >
                        <Flex
                            justifyContent="center"
                            alignItems="center"
                            w="3rem"
                            h="2rem"
                            bg="#EDEAFD"
                            borderRadius={4}
                        >
                            <Text
                                color="#4529E6"
                            >
                                2013
                            </Text>
                        </Flex>

                        <Flex
                            justifyContent="center"
                            alignItems="center"
                            w="3rem"
                            h="2rem"
                            bg="#EDEAFD"
                            borderRadius={4}
                        >
                            <Text
                                color="#4529E6"
                            >
                                0 KM
                            </Text>
                        </Flex>
                    </Flex>
                    <Text
                    >
                        R$ 00000000
                    </Text>
                </Flex>
                <Box>
                    <Button
                        w="7rem"
                        h="3rem"
                        bg="#4529E6"
                        color="#fff"
                        fontSize={16}
                        border="none"
                        borderRadius={4}
                    >
                        Comprar
                    </Button>
                </Box>
            </Flex>
        </Flex>
    )
}