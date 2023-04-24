import {
    Avatar,
    Flex,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Modal,
    Text,
} from "@chakra-ui/react";
import { useUserContext } from "../../../providers/UserContext";
import { Link } from "react-router-dom";
import { EditUserModal } from "../../RenderModalContent/ModalEditUser";
import { EditAddressModal } from "../../RenderModalContent/ModalEditAddress";

export function UserLogged() {
    const { user, logout, overlay, setOverlay, isOpen, onClose, onOpen } =
        useUserContext();

    return (
        <Menu>
            <Flex align={"center"} gap={"1rem"}>
                <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<Avatar src={user?.urlImg} name={user?.name} />}
                    bg={"transparent"}
                    _hover={{ bg: "" }}
                />
                <Text>{user?.name}</Text>
            </Flex>
            <MenuList>
                <MenuItem
                    onClick={() => {
                        setOverlay(<EditUserModal onClose={onClose} />);
                        onOpen();
                    }}
                >
                    Editar Perdil
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        setOverlay(<EditAddressModal onClose={onClose} />);
                        onOpen();
                    }}
                >
                    Editar endereço
                </MenuItem>
                {user?.salesman ? (
                    <>
                        <MenuItem>Meus Anúncios</MenuItem>
                    </>
                ) : (
                    <></>
                )}
                <MenuItem onClick={logout}>Sair</MenuItem>
            </MenuList>
            <Modal isOpen={isOpen} onClose={onClose}>
                {overlay}
            </Modal>
        </Menu>
    );
}
