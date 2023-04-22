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
import { useState } from "react";

export function Dashboard() {
    const { isMobile, isFullHd } = useUserContext();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [filteredCars, setFilteredCars] = useState(cars);

    return (
        <Flex w={isFullHd ? "65%" : "100%"}>
            {isMobile ? (
                <>
                    <Flex pb={"3rem"}>
                        <Box>
                            <FilterCar
                                filtered={filteredCars}
                                setFilteredCars={setFilteredCars}
                            />
                        </Box>
                        <Wrap spacing={"1.5rem"} overflow={"hidden"}>
                            {filteredCars.map((car: any) => {
                                return <CardCar car={car} />;
                            })}
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
                            {filteredCars.map((elem: any) => {
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
                                    <FilterCar
                                        filtered={filteredCars}
                                        setFilteredCars={setFilteredCars}
                                    />
                                </ModalContent>
                            </Modal>
                        </Center>
                    </Flex>
                </>
            )}
        </Flex>
    );
}
