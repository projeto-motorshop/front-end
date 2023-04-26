import { Flex, Image, Text } from "@chakra-ui/react";
import { useCarContext } from "../../../providers/CarContext";


export function CardPictures() {

    const { car } = useCarContext()

    return (
        <>
            <Flex
                border="1px solid red"
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
                >
                    {car?.images.map((elem) => {
                        return (
                            <>
                                <Flex
                                    borderRadius={4}
                                    mr={15}
                                    mb={15}
                                >
                                    <Image
                                        src={elem.urlImg}
                                        alt={car.brand}
                                        w="90%"
                                        h="4rem"
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