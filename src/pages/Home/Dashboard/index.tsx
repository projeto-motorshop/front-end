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
import cars from "../../../components-moks";
import { useUserContext } from "../../../providers/UserContext";

export function Dashboard() {
    const { isMobile } = useUserContext();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Flex>
            {isMobile ? (
                <>
                    <FilterCar close={""} />
                    <Wrap spacing={"1.5rem"} overflow={"hidden"}>
                        {cars.map((elem) => {
                            return <CardCar car={elem} />;
                        })}
                    </Wrap>
                </>
            ) : (
                <>
                    <Flex overflow={"hidden"} gap={"2rem"} flexDir={"column"}>
                        <Flex gap={"1.5rem"} overflow={"auto"} pl={"2rem"}>
                            {cars.map((elem) => {
                                return <CardCar car={elem} />;
                            })}
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
                                    <FilterCar close={onClose} />
                                </ModalContent>
                            </Modal>
                        </Center>
                    </Flex>
                </>
            )}
        </Flex>
    );
}
