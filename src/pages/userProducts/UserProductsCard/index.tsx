import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { useUserContext } from "../../../providers/UserContext";
import api from "../../../service/api";

export function UserProductsCard() {
    const { isMobile, isFullHd, } = useUserContext();
    const { userId } = useParams()
    const loadUser = async () => await api.get(`/users/${userId}`).then((res) => console.log(res))
    const navigate = useNavigate();

    const navigateToProduct = (id: string) => {
        navigate(`/products/${id}`);
    };

    return (
        <>
            {/* {loadUser.map((elem: ICarsResponse) => {
                return (
                    <>
                        <Flex
                            align="flex-start"
                            justifyContent={"flex-start"}
                            w={isFullHd ? "30%" : isMobile ? "32%" : "100%"}
                            flexDirection={"row"}
                            onClick={() => { navigateToProduct(elem.user.id) }}
                            cursor="pointer"
                            key={elem.id}
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
                                    h={isMobile ? "17rem" : "8rem"}
                                    border={"2px solid transparent"}
                                    _hover={{ border: "2px solid #4529E6" }}
                                >
                                    {elem.goodDeal ? (
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
                                    {elem.isPublished ? (
                                        <Flex
                                            pos={"absolute"}
                                            left="4px"
                                            top={"5px"}
                                            zIndex={3}
                                            bg={"brand.1"}
                                            h={"1.5rem"}
                                            alignItems={"center"}
                                            borderRadius={"2px"}
                                        >
                                            <Badge
                                                bg={"brand.1"}
                                                color={"white"}
                                                fontSize={"0.875rem"}
                                                fontWeight={"500"}
                                            >
                                                Ativo
                                            </Badge>
                                        </Flex>
                                    ) : (
                                        <>
                                            <Flex
                                                pos={"absolute"}
                                                left="4px"
                                                top={"5px"}
                                                zIndex={3}
                                                bg={"grey.4"}
                                                h={"1.5rem"}
                                                alignItems={"center"}
                                                borderRadius={"2px"}
                                            >
                                                <Badge
                                                    bg={"grey.4"}
                                                    color={"white"}
                                                    fontSize={"0.875rem"}
                                                    fontWeight={"500"}
                                                >
                                                    Inativo
                                                </Badge>
                                            </Flex>
                                        </>
                                    )}

                                    <Image
                                        src={elem.frontImg}
                                        alt={elem.model}
                                        pos={"relative"}
                                        objectFit={"cover"}
                                    />
                                </Flex>

                                <Flex flexDirection={"column"} gap={"1rem"}>
                                    <Text fontWeight={"800"}>
                                        {elem.brand} - {elem.model}
                                    </Text>
                                    <Box
                                        mt="1"
                                        fontWeight="500"
                                        as="h4"
                                        lineHeight="tight"
                                        noOfLines={3}
                                        fontFamily={"inter"}
                                    >
                                        {elem.description}
                                    </Box>
                                </Flex>
                                <Flex>
                                    <Center gap={isMobile ? "1rem" : ".5rem"}>
                                        <Avatar
                                            name={elem.user.name}
                                            src={elem.user.urlImg}
                                        />
                                        <Text
                                            fontWeight={"700"}
                                            fontSize={
                                                isMobile ? "14px" : "10px"
                                            }
                                        >
                                            {elem.user.name}
                                        </Text>
                                    </Center>
                                </Flex>
                                <Flex
                                    justifyContent="space-between"
                                    gap={"1rem"}
                                >
                                    <Flex gap={".2rem"}>
                                        <Text
                                            bg={"brand.4"}
                                            color={"brand.1"}
                                            p={".5rem"}
                                            borderRadius={"4px"}
                                            w={"100%"}
                                            fontSize={
                                                isMobile ? "14px" : "10px"
                                            }
                                            textAlign={"center"}
                                        >
                                            KM{elem.mileage}
                                        </Text>
                                        <Text
                                            bg={"brand.4"}
                                            color={"brand.1"}
                                            p={".5rem"}
                                            fontSize={
                                                isMobile ? "14px" : "10px"
                                            }
                                            borderRadius={"4px"}
                                        >
                                            {elem.year}
                                        </Text>
                                    </Flex>
                                    <Center>
                                        <Text
                                            fontWeight={"500"}
                                            fontSize={
                                                isMobile ? "14px" : "10px"
                                            }
                                        >
                                            R$
                                            {parseInt(
                                                elem.price
                                            ).toLocaleString("pt-BR")}
                                        </Text>
                                    </Center>
                                </Flex>
                            </Flex>
                        </Flex>
                    </>
                );
            })} */}
        </>
    );
}
