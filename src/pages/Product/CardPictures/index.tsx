import { Flex, Image, Modal, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { useCarContext } from "../../../providers/CarContext";
import { useUserContext } from "../../../providers/UserContext";
import { ModalImagesCar } from "../../../components/RenderModalContent/ModalImagesCar";

export function CardPictures() {
    const { car } = useCarContext();
    const { isFullHd, isNotebook, isMobile } = useUserContext();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [overlay, setOverlay] = useState(<ModalImagesCar />);

    return (
        <>
            <Flex
                flexDir="column"
                mt={8}
                h="24rem"
                bg="#FDFDFD"
                p="1rem"
                borderRadius={4}
                overflowX="hidden"
                onClick={() => {
                    setOverlay(<ModalImagesCar onClose={onClose} />);
                    onOpen();
                }}
                cursor={"pointer"}
            >
                <Text fontSize={20} mb={5}>
                    Fotos
                </Text>
                <Flex flexWrap="wrap" justifyContent="center">
                    {car?.images.map((elem) => {
                        return (
                            <>
                                <Flex
                                    borderRadius={4}
                                    mr={15}
                                    mb={15}
                                    w={
                                        isFullHd
                                            ? "calc((100% - 36px) / 4)"
                                            : isMobile
                                            ? "calc((100% - 54px) / 3)"
                                            : "312px"
                                    }
                                >
                                    <Image
                                        src={elem.urlImg}
                                        alt={car.brand}
                                        objectFit="cover"
                                    />
                                </Flex>
                            </>
                        );
                    })}
                </Flex>
            </Flex>
            <Modal isOpen={isOpen} onClose={onClose}>
                {overlay}
            </Modal>
        </>
    );
}
