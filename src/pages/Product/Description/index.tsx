import { Container, Flex, Text } from "@chakra-ui/react";


export function Description() {
    return (
        <>
            <Flex
                flexDir="column"
                // pos="relative"
                p="2.5rem"
                w="47rem"
                h="13rem"
                mt={20}
                bg="#FDFDFD"
                borderRadius={4}
            >
                <Flex
                    flexDir="column"
                    alignItems="space-around"
                >
                    <Text
                        fontSize={20}
                        mb={20}
                    >
                        Descrição
                    </Text>
                    <Text>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Text>
                </Flex>
            </Flex>
        </>
    )
}