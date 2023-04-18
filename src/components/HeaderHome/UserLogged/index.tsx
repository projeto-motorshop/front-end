import {
    Avatar,
    Flex,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
} from "@chakra-ui/react";

export function UserLogged({ user }: any) {
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
                {user.salesman ? (
                    <>
                        <MenuItem>Meus Anúncios</MenuItem>
                    </>
                ) : (
                    <></>
                )}
                <MenuItem>Sair</MenuItem>
            </MenuList>
        </Menu>
    );
}
