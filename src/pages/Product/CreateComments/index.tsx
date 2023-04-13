import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";


export function CreateComment() {
    return (
        <>
            <Flex
                flexDir="column"
                // pos="relative"
                w="47rem"
                h="18rem"
                p="2.5rem"
                bg="#FDFDFD"
                borderRadius={4}
                mt="1.5rem"
                mb="2.5rem"
            >
                <Flex
                    mb={20}
                >
                    <Box>
                        <Image src="" alt=""/>
                    </Box>
                    <Text>Igor Ramon</Text>
                </Flex>
                <Box pos="relative">
                    <Input
                        w="39rem"
                        h="8rem"
                        pos="absolute"
                        // top="0"
                        // right="0"
                    />
                    <Button
                        w="7rem"
                        h="3rem"
                        bg="#4529E6"
                        color="#fff"
                        fontSize={16}
                        border="none"
                        borderRadius={4}
                        pos="absolute"
                        bottom="-7rem"
                        right="4rem"
                    >
                        Comentar
                    </Button>
                </Box>

            </Flex>
        </>
    )
}