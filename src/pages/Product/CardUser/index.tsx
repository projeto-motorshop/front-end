import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";


export function CardUser() {
    return (
        <>
            <Flex
                mt={20}
                w="100%"
                h="27rem"
                p="2.5rem"
                bg="#FDFDFD"
                borderRadius={4}
                overflow="hidden"
            >
                <Flex
                    flexDir="column"
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <Box
                        border="1px solid black"
                        borderRadius="50%"
                        w="120px"
                        h="120px"
                        mb="10%"
                    >
                        <Image src="" alt="" />
                    </Box>
                    <Box>
                        <Text
                            fontSize={20}
                            mb="10%"
                        >
                            Igor Ramon
                        </Text>
                    </Box>
                    <Flex
                        mb="10%"
                    >
                        <Text
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        </Text>
                    </Flex>

                    <Button
                        w="100%"
                        h="20%"
                        bg="#0B0D0D"
                        color="#fff"
                        border="none"
                        borderRadius={4}
                    >
                        Ver todos os anuncios
                    </Button>

                </Flex>
            </Flex>
        </>
    )
}