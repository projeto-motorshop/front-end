import { Button, Flex, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function BtnLogin() {
    return (
        <Flex
            h="100%"
            borderLeft="1px"
            borderColor="grey.6"
            align="center"
            justify="center"
        >
            <Stack direction="row" spacing={4} align="center" px={"1rem"}>
                <Link to="/">
                    <Button
                        color={"grey.1"}
                        variant="ghost"
                        _hover={{ bg: "grey.1", color: "white" }}
                    >
                        Fazer Login
                    </Button>
                </Link>
                <Link to="/register">
                    <Button
                        color={"grey.1"}
                        variant="outline"
                        _hover={{ bg: "grey.1", color: "white" }}
                    >
                        Cadastrar
                    </Button>
                </Link>
            </Stack>
        </Flex>
    );
}
