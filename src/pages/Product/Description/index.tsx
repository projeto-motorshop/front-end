import { Flex, Text } from "@chakra-ui/react";
import { useCarContext } from "../../../providers/CarContext";


export function Description() {

    const { car } = useCarContext()

    return (
        <>
            <Flex
                flexDir="column"
                p="2.5rem"
                w="100%"
                h="16rem"
                mt={10}
                bg="#FDFDFD"
                borderRadius={4}
                overflow="hidden"
            >
                <Flex
                    flexDir="column"
                    alignItems="space-around"
                >
                    <Text
                        fontSize={20}
                        mb={10}
                    >
                        Descrição
                    </Text>
                    <Text>
                        {car?.description}
                    </Text>
                </Flex>
            </Flex>
        </>
    )
}