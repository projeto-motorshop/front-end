import { Flex, Image, Text } from "@chakra-ui/react";
import { useCarContext } from "../../../providers/CarContext";
import { useUserContext } from "../../../providers/UserContext";


export function CardPictures() {

    const { car } = useCarContext()
    const { isFullHd, isNotebook, isMobile } = useUserContext()

    return (
        <>
            <Flex
                flexDir="column"
                mt={8}
                h="24rem"
                bg="#FDFDFD"
                p="1rem"
                borderRadius={4}
                overflowX="hidden"
            >
                <Text
                    fontSize={20}
                    mb={5}
                >
                    Fotos
                </Text>
                <Flex
                    flexWrap="wrap"
                    justifyContent="center"
                    >
                    {car?.images.map((elem) => {
                        return (
                            <>
                                <Flex
                                    borderRadius={4}
                                    mr={15}
                                    mb={15}
                                    bg={isFullHd ? "green" : isMobile ? "red" : "blue"}
                                    >
                                    <Image
                                        src={elem.urlImg}
                                        alt={car.brand}
                                        w={isFullHd ? "30%" : isNotebook ? "120px": isMobile ? "80px" : "190px"}
                                        objectFit="cover"
                                    />
                                </Flex>
                            </>
                        )
                    })}
                </Flex>
            </Flex>
        </>
    )
}