import {
    Box,
    Button,
    Flex,
    Modal,
    ModalContent,
    ModalOverlay,
    useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { EditUserModal } from "../../components/RenderModalContent/ModalEditUser";
import { EditAddressModal } from "../../components/RenderModalContent/ModalEditAddress";
import { CreateAdModal } from "../../components/RenderModalContent/ModalAd";
import { EditAdModal } from "../../components/RenderModalContent/ModalEditAd";

export function TestePage() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [overlay, setOverlay] = useState(<EditUserModal />);

    return (
        <Flex gap={"2rem"}>
            <Button
                bg={"red"}
                onClick={() => {
                    setOverlay(<EditUserModal onClose={onClose} />);
                    onOpen();
                }}
            >
                Editar Perfil
            </Button>
            <Button
                bg={"red"}
                onClick={() => {
                    setOverlay(<EditAddressModal onClose={onClose} />);
                    onOpen();
                }}
            >
                Editar Endereço
            </Button>
            <Button
                bg={"red"}
                onClick={() => {
                    setOverlay(<CreateAdModal onClose={onClose} />);
                    onOpen();
                }}
            >
                Criar Anuncio
            </Button>
            <Button
                bg={"red"}
                onClick={() => {
                    setOverlay(<EditAdModal onClose={onClose} />);
                    onOpen();
                }}
            >
                Editar Anuncio
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                {overlay}
            </Modal>
        </Flex>
    );
}
