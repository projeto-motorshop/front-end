import { Box, Flex, Image, Text } from "@chakra-ui/react";



export function CardComment () {
    return (
        <>
            <Flex
                flexDir="column"
                mb={40}
            >
                <Flex
                    justifyContent="space-around"
                    w="19rem"
                    mb={20}
                >
                    <Box>
                        <Image src=""alt="imagem"/>
                    </Box>
                    <Text
                        fontSize={14}
                    >
                        Igor Ramon
                    </Text>
                    <Text
                        fontSize={14}
                    >
                        há 0 dias
                    </Text>
                </Flex>

                <Text
                    fontSize={14}
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Text>
            </Flex>
        </>
    )
}