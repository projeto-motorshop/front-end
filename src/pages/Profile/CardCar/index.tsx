import {
    Avatar,
    Box,
    Center,
    Flex,
    Image,
    Text,
} from "@chakra-ui/react";
import { useUserContext } from "../../../providers/UserContext";


export function CardCar() {

    const { isMobile, isFullHd } = useUserContext();

    return (
        <>
            <Flex
                justifyContent="flex-start"
                align="flex-start"
                w={isMobile ? "30%" : "100%"}
                flexDirection="row"
                cursor="pointer"
            >
                <Flex
                    w="100%"
                    p={3}
                    flexDirection="column"
                    gap="2rem"
                    pos="relative"
                >
                    <Flex
                        justifyContent="center"
                        pos="relative"
                        border="2px solid transparent"
                        _hover={{ border: "2px solid" }}
                        bg="var(--grey7)"
                    >
                        {/* {car.goodDeal ? (
                            <Flex
                                pos={"absolute"}
                                right="4px"
                                top={"5px"}
                                zIndex={3}
                                bg={"random.7"}
                                h={"1.5rem"}
                                alignItems={"center"}
                                borderRadius={"2px"}
                            >
                                <Badge
                                    bg={"random.7"}
                                    color={"white"}
                                    fontSize={"1rem"}
                                    fontWeight={"500"}
                                >
                                    <MdAttachMoney />
                                </Badge>
                            </Flex>
                        ) : (
                            <></>
                        )} */}

                        <Image
                            src="../../../../public/card-image.svg"
                            alt=""
                            pos="relative"
                        />
                    </Flex>

                    <Flex
                        flexDirection="column"
                        gap="1rem"
                    >
                        <Text>Marca - Modelo</Text>
                        <Box
                            mt="1"
                            fontWeight="400"
                            as="h4"
                            lineHeight="tight"
                            noOfLines={3}
                            fontFamily="inter"
                        >
                            Descrição
                        </Box>
                    </Flex>
                    <Flex>
                        <Center
                            gap={isMobile ? "1rem" : ".5rem"}
                        >
                            <Avatar name="Igor Ramon" src="" />
                            <Text
                                fontWeight={700}
                                fontSize={isMobile ? "14px" : "10px"}
                            >
                                Nome Usuário
                            </Text>
                        </Center>
                    </Flex>
                    <Flex
                        justifyContent="space-between"
                        gap="1rem"
                    >
                        <Flex gap="1rem">
                            <Text
                                bg="brand.4"
                                color="brand.1"
                                p="0.5rem"
                                borderRadius="4px"
                                w="100%"
                                fontSize={isMobile ? "14px" : "10px"}
                                textAlign="center"
                            >
                                KM
                            </Text>
                            <Text
                                bg="brand.4"
                                color="brand.1"
                                p="0.5rem"
                                fontSize={isMobile ? "14px" : "10px"}
                                borderRadius={4}
                            >
                                Ano
                            </Text>
                        </Flex>
                        <Center>
                            <Text
                                fontWeight={500}
                                fontSize={isMobile ? "14px" : "10px"}
                            >
                                R$ 0,000.00
                            </Text>
                        </Center>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}