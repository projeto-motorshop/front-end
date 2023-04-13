import { Flex, Text } from "@chakra-ui/react";
import { CardComment } from "./CardComment";


export function ListComment() {
    return (
        <>
            <Flex
                flexDir="column"
                // pos="relative"
                mt={20}
                w="47rem"
                h="35rem"
                p="2.5rem"
                bg="#FDFDFD"
                borderRadius={4}
            >
                <Text
                    fontSize={20}
                    mb="2.5"
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