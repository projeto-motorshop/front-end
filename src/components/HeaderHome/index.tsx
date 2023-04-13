import { Box, Text, Flex, Button, Stack, Portal } from "@chakra-ui/react";

export function HeaderHome() {
    return (
        <>
            <Flex
                bg="whiteFixed"
                w="100%"
                h="20"
                px={5}
                color="white"
                borderBottom="1px"
                borderColor="grey.6"
            >
                <Box w="70%" display="flex" alignItems="center">
                    <Text
                        bgGradient="linear(to-r, grey.1 40%, brand.1 60%)"
                        bgClip="text"
                        fontSize="3xl"
                        fontWeight="extrabold"
                    >
                        Motors Shop
                    </Text>
                </Box>

                <Flex
                    w={"30%"}
                    h="100%"
                    borderLeft="1px"
                    borderColor="grey.6"
                    align="center"
                    justify="center"
                >
                    <Stack direction="row" spacing={4} align="center">
                        <Button
                            colorScheme="teal"
                            variant="ghost"
                            _hover={{ bg: "grey.1", color: "white" }}
                        >
                            Fazer Login
                        </Button>
                        <Button
                            color={"grey.1"}
                            variant="outline"
                            _hover={{ bg: "grey.1", color: "white" }}
                        >
                            Cadastrar
                        </Button>
                    </Stack>
                </Flex>
            </Flex>
        </>
    );
}
