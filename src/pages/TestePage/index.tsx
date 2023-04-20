import {
    Button,
    Flex
} from "@chakra-ui/react";
import { useState } from "react";
import { CreateAdModal } from "../../components/RenderModalContent/ModalAd";
import { EditAddressModal } from "../../components/RenderModalContent/ModalEditAddress";
import { EditUserModal } from "../../components/RenderModalContent/ModalEditUser";

export function TestePage() {
    const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
    const [isEditAddressModalOpen, setIsEditAddressModalOpen] = useState(false);
    const [isAdModalOpen, setIsAdModalOpen] = useState(false);

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
            <Button>teste</Button>
        </Flex>
    );
}
