import { Flex, Text } from "@chakra-ui/react";
import { CardComment } from "./CardComment";


export function ListComment() {
    return (
        <>
            <Flex
                flexDir="column"
                mt={5}
                w="100%"
                h="35rem"
                p="2.5rem"
                bg="#FDFDFD"
                borderRadius={4}
            >
                <Text
                    fontSize={20}
                    mt="5%"
                    mb="5%"
                >
                    Comentários
                </Text>
                <CardComment />
                <CardComment />
                <CardComment />
            </Flex>
        </>
    )
}