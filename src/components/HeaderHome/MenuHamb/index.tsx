import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, AddIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

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
                <Link to="/">
                    <MenuItem>Fazer Login</MenuItem>
                </Link>
                <Link to="/register">
                    <MenuItem>Cadastro</MenuItem>
                </Link>
            </MenuList>
        </Menu>
    );
}
