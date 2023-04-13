import { Box, IconButton, Flex, Text, Link } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";

export function FooterHome() {
    return (
        <>
            <Flex
                w={"100%"}
                bg={"grey.1"}
                color={"white"}
                p={"3rem"}
                justifyContent={"space-around"}
                alignItems={"center"}
                mt={"2rem"}
                scrollBehavior={"smooth"}
                pos="relative"
                bottom="0"
            >
                <Box>
                    <Text display={"flex"} gap={2} alignItems={"baseline"}>
                        <Text fontSize={"2rem"}>Motors</Text>
                        Shop
                    </Text>
                </Box>
                <Box>
                    <Text>© 2022 - Todos os direitos reservados.</Text>
                </Box>
                <Box>
                    <Link href="#top" scrollBehavior={"smooth"}>
                        <IconButton
                            aria-label="voltar ao topo"
                            fontSize={"2.5rem"}
                            icon={<ChevronUpIcon />}
                            bg="grey.2"
                            variant="solid"
                            _hover={{ bg: "grey.4" }}
                        />
                    </Link>
                </Box>
            </Flex>
        </>
    );
}
