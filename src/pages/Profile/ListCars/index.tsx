import { Flex } from "@chakra-ui/react";


export function ListCars({ children }: any) {
    return (
        <>
            <Flex
                justifyContent="center"
                w="100%"
                mt="4%"
            >
                <Flex
                    flexDir="column"
                    alignItems="center"
                    w="95%"
                    mb="10rem"
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