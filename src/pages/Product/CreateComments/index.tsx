import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";


export function CreateComment() {
    return (
        <>
            <Flex
                flexDir="column"
                w="47rem"
                h="18rem"
                p={40}
                mt={20}
                bg="#FDFDFD"
                borderRadius={4}
            >
                <Flex
                    mb={20}
                >
                    <Box>
                        <Image src="" alt=""/>
                    </Box>
                    <Text>Igor Ramon</Text>
                </Flex>
                <Box>
                    <Input
                        w="39rem"
                        h="8rem"
                    />
                    <Button
                        w="7rem"
                        h="3rem"
                        bg="#4529E6"
                        color="#fff"
                        fontSize={16}
                        border="none"
                        borderRadius={4}
                    >
                        Comentar
                    </Button>
                </Box>

            </Flex>
        </>
    )
}