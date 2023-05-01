import { Flex } from "@chakra-ui/react";


export function List({ children }: any) {
    return (
        <>
            <Flex
                justifyContent="center"
                w="80%"
                mt="4%"
            >
                <Flex
                    flexDir="column"
                    alignItems="center"
                    w="95%"
                    mb="5rem"
                >
                    <Flex
                        justifyContent="flex-start"
                        w="100%"
                    >

                    </Flex>
                    <Flex
                        flexWrap="wrap"
                        w="100%"
                    >
                        {children}
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}