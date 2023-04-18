import {
    Avatar,
    Badge,
    Box,
    Center,
    Flex,
    Image,
    Text,
    border,
} from "@chakra-ui/react";
import { MdAttachMoney } from "react-icons/md";
import { useUserContext } from "../../../providers/UserContext";
import { useNavigate } from "react-router";

export function CardCar({ car }: any) {
    const { isMobile, isFullHd } = useUserContext();
    const navigate = useNavigate();

    const navigateToCar = (id: any) => {
        navigate(`/product/${id}`);
    };

    return (
        <>
            <Flex
                align="flex-start"
                justifyContent={"flex-start"}
                w={isMobile ? "30%" : "100%"}
                flexDirection={"row"}
                onClick={(e) => navigateToCar(car.id)}
                cursor="pointer"
                key={car.id}
            >
                <Flex
                    w={"100%"}
                    p={3}
                    flexDirection={"column"}
                    gap={"2rem"}
                    pos={"relative"}
                >
                    <Flex
                        pos={"relative"}
                        border={"2px solid transparent"}
                        _hover={{ border: "2px solid" }}
                    >
                        {car.goodDeal ? (
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
                        )}

                        <Image
                            src={car.Image}
                            alt={car.model}
                            pos={"relative"}
                        />
                    </Flex>

                    <Flex flexDirection={"column"} gap={"1rem"}>
                        <Text>{car.model}</Text>
                        <Box
                            mt="1"
                            fontWeight="400"
                            as="h4"
                            lineHeight="tight"
                            noOfLines={3}
                            fontFamily={"inter"}
                        >
                            {car.description}
                        </Box>
                    </Flex>
                    <Flex>
                        <Center gap={isMobile ? "1rem" : ".5rem"}>
                            <Avatar name={car.user.name} src={car.user.img} />
                            <Text
                                fontWeight={"700"}
                                fontSize={isMobile ? "14px" : "10px"}
                            >
                                {car.user.name}
                            </Text>
                        </Center>
                    </Flex>
                    <Flex justifyContent="space-between" gap={"1rem"}>
                        <Flex gap={"1rem"}>
                            <Text
                                bg={"brand.4"}
                                color={"brand.1"}
                                p={".5rem"}
                                borderRadius={"4px"}
                                w={"100%"}
                                fontSize={isMobile ? "14px" : "10px"}
                                textAlign={"center"}
                            >
                                KM{car.km}
                            </Text>
                            <Text
                                bg={"brand.4"}
                                color={"brand.1"}
                                p={".5rem"}
                                fontSize={isMobile ? "14px" : "10px"}
                                borderRadius={"4px"}
                            >
                                {car.year}
                            </Text>
                        </Flex>
                        <Center>
                            <Text
                                fontWeight={"500"}
                                fontSize={isMobile ? "14px" : "10px"}
                            >
                                R${car.price}
                            </Text>
                        </Center>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
}
