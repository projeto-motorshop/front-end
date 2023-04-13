import {
    AddIcon,
    EditIcon,
    ExternalLinkIcon,
    HamburgerIcon,
    RepeatIcon,
} from "@chakra-ui/icons";
import {
    Avatar,
    Box,
    Button,
    Flex,
    IconButton,
    Menu,
    MenuButton,
    MenuDivider,
    MenuGroup,
    MenuItem,
    MenuList,
    Text,
} from "@chakra-ui/react";

export function UserLogged() {
    return (
        <Menu>
            <Flex align={"center"} gap={"1rem"}>
                <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<Avatar name="victor henrique" />}
                    bg={"transparent"}
                    _hover={{ bg: "" }}
                />
                <Text>Victor Henrique</Text>
            </Flex>
            <MenuList>
                <MenuItem>Editar Perdil</MenuItem>
                <MenuItem>Editar endereço</MenuItem>
                <MenuItem>Meus Anúncios</MenuItem>
                <MenuItem>Sair</MenuItem>
            </MenuList>
        </Menu>
    );
}
