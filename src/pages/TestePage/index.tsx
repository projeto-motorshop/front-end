import { Button, Modal, useDisclosure, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CreateAdModal } from "../../components/RenderModalContent/ModalAd";
import { EditAdModal } from "../../components/RenderModalContent/ModalEditAd";
import { EditAddressModal } from "../../components/RenderModalContent/ModalEditAddress";
import { EditUserModal } from "../../components/RenderModalContent/ModalEditUser";
import { useUserContext } from "../../providers/UserContext";

export function TestePage() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [overlay, setOverlay] = useState(<EditUserModal />);



    return (
        <Flex gap={"2rem"}>
            <Button
                bg={"red"}
                onClick={() => {
                    setOverlay(<EditUserModal />);
                    onOpen();
                }}
            >
                Editar Perfil
            </Button>
            <Button
                bg={"red"}
                onClick={() => {
                    setOverlay(<EditAddressModal />);
                    onOpen();
                }}
            >
                Editar Endereço
            </Button>
            <Button
                bg={"red"}
                onClick={() => {
                    setOverlay(<CreateAdModal />);
                    onOpen();
                }}
            >
                Criar Anuncio
            </Button>
            <Button
                bg={"red"}
                onClick={() => {
                    setOverlay(<EditAdModal />);
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
