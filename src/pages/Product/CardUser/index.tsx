import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";


export function CardUser() {
    return (
        <>
            <Flex
                mt={20}
                w="27rem"
                h="27rem"
                p="40"
                bg="#FDFDFD"
                borderRadius={4}
                >
                <Flex
                    flexDir="column"
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <Box
                        border="1px solid black"
                        borderRadius="50%"
                        w="7rem"
                        h="7rem"
                    >
                        <Image src="" alt="" />
                    </Box>
                    <Box>
                        <Text
                            fontSize={20}
                        >
                            Igor Ramon
                        </Text>
                    </Box>
                    <Box>
                        <Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        </Text>
                    </Box>
                    <Box>
                        <Button
                            w="13rem"
                            h="3rem"
                            bg="#0B0D0D"
                            color="#fff"
                            border="none"
                            borderRadius={4}
                        >
                            Ver todos os anuncios
                        </Button>
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}