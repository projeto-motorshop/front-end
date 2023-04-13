import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, AddIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { FiLogIn } from "react-icons/fi";

export function MenuHamb() {
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label="Options"
                variant="outline"
                icon={<HamburgerIcon />}
            />
            <MenuList>
                <MenuItem command={(<FiLogIn color="cyan" />) as any}>
                    Fazer Login
                </MenuItem>
                <MenuItem command={(<FiLogIn color="cyan" />) as any}>
                    Cadastro
                </MenuItem>
            </MenuList>
        </Menu>
    );
}
