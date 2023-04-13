import banner from "../../../assets/bannerCar.svg";
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";

export function BannerHome() {
    return (
        <>
            <Box
                w={"100%"}
                bgGradient="linear(to-b, grey.11, grey.1)"
                h={"33.25rem"}
                pos={"relative"}
                zIndex={"tooltip"}
                mb={"2rem"}
            >
                <Box pos={"absolute"} h={"100%"} w={"100%"} zIndex={"hide"}>
                    <Image
                        boxSize="100%"
                        src={banner}
                        alt="um carro qualquer"
                    ></Image>
                </Box>

                <Box
                    zIndex={3}
                    pos={"absolute"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    w={"100%"}
                    h={"100%"}
                    color={"white"}
                >
                    <Flex direction={"column"} alignItems={"center"}>
                        <Center fontSize={"2.75rem"}>Motors Shop</Center>
                        <Center fontSize={"2.75rem"}>
                            A melhor plataforma de anúncios de carros do país
                        </Center>
                    </Flex>
                </Box>
            </Box>
        </>
    );
}
