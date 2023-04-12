import { Flex, Text } from "@chakra-ui/react";
import { CardComment } from "./CardComment";


export function ListComment() {
    return (
        <>
            <Flex
                flexDir="column"
                mt={20}
                w="47rem"
                h="35rem"
                p={40}
                bg="#FDFDFD"
                borderRadius={4}
            >
                <Text
                    fontSize={20}
                    mb={40}
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