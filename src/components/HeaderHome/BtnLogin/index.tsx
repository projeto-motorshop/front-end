import { Button, Flex, Stack } from "@chakra-ui/react";

export function BtnLogin() {
    return (
        <Flex
            h="100%"
            borderLeft="1px"
            borderColor="grey.6"
            align="center"
            justify="center"
        >
            <Stack direction="row" spacing={4} align="center">
                <Button
                    color={"grey.1"}
                    variant="ghost"
                    _hover={{ bg: "grey.1", color: "white" }}
                >
                    Fazer Login
                </Button>
                <Button
                    color={"grey.1"}
                    variant="outline"
                    _hover={{ bg: "grey.1", color: "white" }}
                >
                    Cadastrar
                </Button>
            </Stack>
        </Flex>
    );
}
