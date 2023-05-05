import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useCarContext } from "../../../providers/CarContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "./styles.css";

export function CardCar() {
    const { car } = useCarContext();

    return (
        <Flex flexDir="column" mt={30} w="100%">
            <Flex
                justifyContent="center"
                w="100%"
                h="22rem"
                bg="#FDFDFD"
                borderRadius={4}
            >
                <Image
                    src={car?.frontImg}
                    objectFit="contain"
                    borderRadius={4}
                />
            </Flex>
            {/* <Flex
                w="100%"
                h="22rem"
            >
                <Swiper
                    navigation={true}
                    slidesPerView={1}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="../../../../public/card-image.svg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="../../../../public/card-image.svg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="../../../../public/card-image.svg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="../../../../public/card-image.svg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="../../../../public/card-image.svg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="../../../../public/card-image.svg" alt="" />
                    </SwiperSlide>
                </Swiper>
            </Flex> */}

            <Flex
                flexDir={"column"}
                justifyContent="space-around"
                w="100%"
                h="15rem"
                mt={5}
                p="2.5rem"
                bg="#FDFDFD"
                borderRadius={4}
            >
                <Text fontSize={20}>{`${car?.brand} - ${car?.model}`}</Text>

                <Flex justifyContent="space-between" alignItems="center">
                    <Flex gap={15}>
                        <Flex
                            justifyContent="center"
                            alignItems="center"
                            p="0.5rem"
                            h="2rem"
                            bg="#EDEAFD"
                            borderRadius={4}
                        >
                            <Text color="#4529E6">{car?.year}</Text>
                        </Flex>

                        <Flex
                            justifyContent="center"
                            alignItems="center"
                            p="0.5rem"
                            h="2rem"
                            bg="#EDEAFD"
                            borderRadius={4}
                        >
                            <Text color="#4529E6">KM {car?.mileage}</Text>
                        </Flex>
                    </Flex>
                    <Text>R$ {car?.price.toLocaleString("pt-BR")}</Text>
                </Flex>
                <Box>
                    <Button
                        w="7rem"
                        h="3rem"
                        bg="#4529E6"
                        color="#fff"
                        fontSize={16}
                        border="none"
                        borderRadius={4}
                    >
                        Comprar
                    </Button>
                </Box>
            </Flex>
        </Flex>
    );
}
