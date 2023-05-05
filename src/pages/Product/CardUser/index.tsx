import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useCarContext } from "../../../providers/CarContext";
import { useUserContext } from "../../../providers/UserContext";


export function CardUser() {

    const { car } = useCarContext()
    const { setUserData } = useUserContext()

    const navigate = useNavigate()

    const navigateToProfile = (id: string) => {
        navigate(`/userproducts/${id}`)
    }


    return (
        <>
            <Flex
                justifyContent="center"
                mt={5}
                w="100%"
                p="1rem"
                bg="#FDFDFD"
                borderRadius={4}
                overflow="hidden"
            >
                <Flex
                    flexDir="column"
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <Flex
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Avatar
                            src={car?.user.urlImg}
                            name={car?.user.name}
                            w="100%"
                            h="70%"
                        />
                    </Flex>
                    <Box>
                        <Text
                            fontSize={20}
                            mb="10%"
                        >
                            {car?.user.name}
                        </Text>
                    </Box>
                    <Flex
                        mb="10%"
                    >
                        <Text
                        >
                            {car?.user.description}
                        </Text>
                    </Flex>
                    <Box>
                        <Button
                            onClick={() => { navigateToProfile(car?.user.id || "") }}
                            w="100%"
                            bg="#0B0D0D"
                            color="#fff"
                            border="none"
                            borderRadius={4}
                        >
                            Ver todos os anuncios
                        </Button>
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}