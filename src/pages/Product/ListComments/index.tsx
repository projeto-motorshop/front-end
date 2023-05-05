import { Flex, Text } from "@chakra-ui/react";
import { CardComment } from "./CardComment";
import cars from "../../../components-moks";
import { useCarContext } from "../../../providers/CarContext";

export function ListComment() {
    const { car } = useCarContext();

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
                overflow={"auto"}
            >
                <Text fontSize={20} mt="5%" mb="5%">
                    Comentários
                </Text>
                {car?.comments.length === 0 ? (
                    <>
                        <Text fontWeight={"bold"}>Nenhum comentário </Text>
                    </>
                ) : (
                    <>
                        <CardComment />
                    </>
                )}
            </Flex>
        </>
    );
}
