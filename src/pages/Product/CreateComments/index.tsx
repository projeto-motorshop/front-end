import { Box, Button, Flex, Image, Text, Textarea } from "@chakra-ui/react";
import { useCarContext } from "../../../providers/CarContext";


export function CreateComment() {

    const { car } = useCarContext()

    return (
        <>
            <Flex
                flexDir="column"
                w="100%"
                h="18rem"
                p="2.5rem"
                bg="#FDFDFD"
                borderRadius={4}
                mt="1.5rem"
                mb="2.5rem"
            >
                <Flex
                    mb="2%"
                >
                    <Box>
                        <Image src="" alt="" />
                    </Box>
                    <Text>{car?.user.name}</Text>
                </Flex>
                <Box pos="relative">
                    <Textarea
                        w="100%"
                        h="8rem"
                        pos="absolute"
                        resize="none"
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
                        right="1rem"
                    >
                        Comentar
                    </Button>
                </Box>

            </Flex>
        </>
    )
}