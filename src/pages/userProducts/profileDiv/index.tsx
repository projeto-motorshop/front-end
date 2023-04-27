import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { useUserContext } from "../../../providers/UserContext";

function ProfileDiv() {

    const { userData } = useUserContext();
    return (


        <Flex flexDirection={"column"} alignItems={"left"} w={'90%'} margin={'0 auto'}>
            <Box display={'flex'} flexDirection={'column'} mt={'1rem'}>
                <Avatar src={userData?.urlImg} name={userData?.name ? userData.name : 'Usuário anônimo'} />
                <Flex alignItems={'center'} columnGap={'10px'} mt={'1rem'}>
                    <Text fontSize={'24px'} fontWeight={'700'}>{userData?.name ? userData.name : 'Usuário anônimo'}</Text>
                    <Text padding={'7px'} bg={'brand.4'} color={"brand.1"} borderRadius={'8px'}>{userData?.salesman ? 'Anunciante' : 'Comprador'} </Text>
                </Flex>
                <Text>{userData?.description}</Text>
            </Box >
        </Flex >
    );
}

export default ProfileDiv
