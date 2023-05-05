import banner from "../../../assets/carro_top2.png";
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import { BannerStyle } from "./style";
import { useUserContext } from "../../../providers/UserContext";

export function BannerHome() {
    const { isMobile } = useUserContext();
    return (
        <>
            <Box
                w={"100%"}
                h={isMobile ? "33.25rem" : "27rem"}
                bgGradient="linear(to-b, grey.11, grey.1)"
                pos={"relative"}
                zIndex={"0"}
                mb={"2rem"}
            >
                <BannerStyle>
                    <Image src={banner} alt="um carro qualquer"/>
                </BannerStyle>

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
                    <Flex
                        direction={"column"}
                        alignItems={"center"}
                        h={isMobile ? "" : "100%"}
                    >
                        <Center
                            fontSize={isMobile ? "2.75rem" : "1.5rem"}
                            p={"1rem"}
                        >
                            Motors Shop
                        </Center>
                        <Center
                            fontSize={isMobile ? "2.75rem" : "1.5rem"}
                            p={"1rem"}
                        >
                            A melhor plataforma de anúncios de carros do país
                        </Center>
                    </Flex>
                </Box>
            </Box>
        </>
    );
}
