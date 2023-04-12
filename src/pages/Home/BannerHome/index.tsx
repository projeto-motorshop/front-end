import banner from "../../../assets/bannerCar.svg";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function BannerHome() {
    return (
        <>
            <Box w={"100%"} bg={"red"} h={"33.25rem"}>
                <Image
                    boxSize="100%"
                    objectFit="cover"
                    src={banner}
                    alt="um carro qualquer"
                ></Image>
            </Box>
            <Box>
                <Flex direction={"column"} alignItems={"center"}>
                    <Text>Motors Shop</Text>
                    <Text>
                        A melhor plataforma de anúncios de carros do país
                    </Text>
                </Flex>
            </Box>
        </>
    );
}
