import {
    Box,
    Button,
    Center,
    Flex,
    Wrap,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    Text,
} from "@chakra-ui/react";
import { CardCar } from "../CardCar";
import { FilterCar } from "../FilterCar";
import { useUserContext } from "../../../providers/UserContext";
import { useCarContext } from "../../../providers/CarContext";
import { useEffect, useState } from "react";
import api from "../../../service/api";

export function Dashboard() {
    const { isMobile, isFullHd, isOpen, onOpen, onClose } = useUserContext();
    const { loadCar, setFilteredCars, offSet, setOffSet } = useCarContext();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const { data } = await api.get(
                `/cars/carsPagination?limit=12&offset=${offSet}`
            );
            setFilteredCars(data.allCars);
            setTotalPages(data.totalPages);
        }

        fetchData();
    }, [currentPage]);

    // useEffect(() => {
    //     loadCar();
    // }, []);

    return (
        <>
            <Flex w={isFullHd ? "65%" : "100%"}>
                {isMobile ? (
                    <>
                        <Flex pb={"3rem"} w={"100%"}>
                            <Box>
                                <FilterCar />
                            </Box>
                            <Wrap
                                spacing={"0.3rem"}
                                overflow={"hidden"}
                                w={"100%"}
                            >
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
            <Flex alignItems={"baseline"} gap={"1rem"} mb={"1rem"}>
                <Button
                    color={"brand.2"}
                    variant="ghost"
                    onClick={() => {
                        setCurrentPage((page) => page - 1);
                        setOffSet(offSet - 12);
                    }}
                    isDisabled={currentPage === 1}
                    _hover={{ bg: "brand.1", color: "white" }}
                >
                    {"<"} Voltar
                </Button>

                <Text>{`${currentPage} de ${totalPages}`}</Text>
                <Button
                    color={"brand.2"}
                    variant="ghost"
                    onClick={() => {
                        setOffSet(offSet + 12);
                        setCurrentPage((page) => page + 1);
                    }}
                    isDisabled={currentPage === totalPages}
                    _hover={{ bg: "brand.1", color: "white" }}
                >
                    Seguinte {">"}
                </Button>
            </Flex>
        </>
    );
}
