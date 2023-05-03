import {
    Box,
    Button,
    Center,
    Flex,
    Wrap,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
} from "@chakra-ui/react";
import { CardCar } from "../CardCar";
import { FilterCar } from "../FilterCar";
import { useUserContext } from "../../../providers/UserContext";
import { useCarContext } from "../../../providers/CarContext";
import { useEffect } from "react";

export function Dashboard() {
    const { isMobile, isFullHd, isOpen, onOpen, onClose } = useUserContext();
    const { loadCar } = useCarContext();

    useEffect(() => {
        loadCar();
    }, []);

    return (
        <Flex w={isFullHd ? "65%" : "100%"}>
            {isMobile ? (
                <>
                    <Flex pb={"3rem"} w={"100%"}>
                        <Box>
                            <FilterCar />
                        </Box>
                        <Wrap spacing={"0.3rem"} overflow={"hidden"} w={"100%"}>
                            <CardCar />
                        </Wrap>
                    </Flex>
                </>
            ) : (
                <>
                    <Flex
                        overflow={"hidden"}
                        gap={"2rem"}
                        flexDir={"column"}
                        py={"2rem"}
                    >
                        <Flex gap={"1.5rem"} overflow={"auto"} py={"2rem"}>
                            <CardCar />;
                        </Flex>
                        <Center>
                            <Button
                                w={"60%"}
                                bg={"brand.2"}
                                color={"white"}
                                _hover={{ bg: "brand.4", color: "brand.1" }}
                                onClick={onOpen}
                            >
                                Filtros
                            </Button>

                            <Modal isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalCloseButton />
                                    <FilterCar />
                                </ModalContent>
                            </Modal>
                        </Center>
                    </Flex>
                </>
            )}
        </Flex>
    );
}
