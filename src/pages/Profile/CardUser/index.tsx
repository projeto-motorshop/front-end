import { Flex, Avatar, Box, Text } from "@chakra-ui/react"

export function CardUser() {
    return (
        <>
            <Flex
                justifyContent="center"
                w="100%"
                mt="9%"
                pos="relative"
            >
                <Flex
                    flexDir="column"
                    borderRadius={4}
                    w="80%"
                    h="21rem"
                    p="3rem"
                    bg="var(--whiteFixed)"
                >
                    <Box
                        mb="1%"
                    >
                        <Avatar
                            name="Igor Ramon"
                            src=""
                            size='xl'
                            mb="1%"
                        />
                        <Flex
                            alignItems="center"
                            mb="3%"
                        >
                            <Text
                                mr="0.5rem"
                            >
                                Igor Ramon
                            </Text>
                            <Box
                                bg="var(--brand4)"
                                p="0.5rem"
                                borderRadius={4}
                            >
                                Anunciante
                            </Box>
                        </Flex>
                    </Box>
                    <Text
                        overflowX="hidden"
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </Text>
                </Flex>
            </Flex>
        </>
    )
}