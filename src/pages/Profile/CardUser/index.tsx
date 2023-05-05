import {
    Avatar,
    Box,
    Button,
    Flex,
    Text
} from "@chakra-ui/react";
import { CreateAdModal } from "../../../components/RenderModalContent/ModalAd";
import { useUserContext } from "../../../providers/UserContext";

export function CardUser() {
    const { user, setOverlay, onOpen, isMobile } = useUserContext();

    return (
        <>
            <Flex justifyContent="center" w="100%" mt="9%" pos="relative">
                <Flex
                    flexDir="column"
                    borderRadius={4}
                    w="80%"
                    p="1.5rem"
                    bg="white"
                >
                    <Box mb="1%">
                        <Avatar
                            name={user?.name}
                            src={user?.urlImg}
                            size="xl"
                            mb="1rem"
                        />
                        <Flex alignItems="center" mb="1rem">
                            <Text mr="0.5rem">{user?.name}</Text>
                            <Box
                                bg="brand.4"
                                p="0.3rem"
                                color={"brand.1"}
                                borderRadius={4}
                            >
                                {user?.salesman ? "Anunciante" : "Comprador"}
                            </Box>
                        </Flex>
                    </Box>
                    <Box
                        p={"0.5rem"}
                        overflow={isMobile ? "" : "auto"}
                        h={isMobile ? "" : "5rem"}
                    >
                        <Text>{user?.description}</Text>
                    </Box>
                    <Box mt={"1rem"}>
                        <Button
                            variant="outline"
                            color={"brand.1"}
                            border={"1px solid"}
                            _hover={{ bg: "brand.2", color: "white" }}
                            onClick={() => {
                                setOverlay(<CreateAdModal />);

                                onOpen();
                            }}
                        >
                            Criar anuncio
                        </Button>
                    </Box>
                </Flex>
            </Flex>
        </>
    );
}
