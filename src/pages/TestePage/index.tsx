import {
    Box,
    Button,
    Flex,
    Modal,
    ModalContent,
    ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import { EditUserModal } from "../../components/RenderModalContent/ModalEditUser";
import { EditAddressModal } from "../../components/RenderModalContent/ModalEditAddress";
import { CreateAdModal } from "../../components/RenderModalContent/ModalAd";
import { EditAdModal } from "../../components/RenderModalContent/ModalEditAd";

export function TestePage() {
    const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
    const [isEditAddressModalOpen, setIsEditAddressModalOpen] = useState(false);
    const [isAdModalOpen, setIsAdModalOpen] = useState(false);
    const [isEditAdModalOpen, setIsEditAdModalOpen] = useState(false);

    return (
        <Flex gap={"2rem"}>
            <Button bg={"red"} onClick={() => setIsEditUserModalOpen(true)}>
                Editar Perfil
            </Button>
            <Button bg={"red"} onClick={() => setIsEditAddressModalOpen(true)}>
                Editar Endereço
            </Button>
            <Button bg={"red"} onClick={() => setIsAdModalOpen(true)}>
                Criar Anuncio
            </Button>
            <Button bg={"red"} onClick={() => setIsEditAdModalOpen(true)}>
                Editar Anuncio
            </Button>

            <EditUserModal
                isOpen={isEditUserModalOpen}
                onClose={() => setIsEditUserModalOpen(false)}
            />
            <EditAddressModal
                isOpen={isEditAddressModalOpen}
                onClose={() => setIsEditAddressModalOpen(false)}
            />
            <CreateAdModal
                isOpen={isAdModalOpen}
                onClose={() => setIsAdModalOpen(false)}
            />
            <EditAdModal
                isOpen={isEditAdModalOpen}
                onClose={() => setIsEditAdModalOpen(false)}
            />
        </Flex>
    );
}
