import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { useUserContext } from "../../../providers/UserContext";

function ProfileDiv() {

    const { user } = useUserContext();
    return (


        <Flex flexDirection={"column"} alignItems={"left"} w={'90%'} margin={'0 auto'}>
            <Box display={'flex'} flexDirection={'column'} mt={'1rem'}>
                <Avatar src={user?.urlImg} name={user?.name ? user.name : 'Usuário anônimo'} />
                <Flex alignItems={'center'} columnGap={'10px'} mt={'1rem'}>
                    <Text fontSize={'24px'} fontWeight={'700'}>{user?.name ? user.name : 'Usuário anônimo'}</Text>
                    <Text padding={'7px'} bg={'brand.4'} color={"brand.1"} borderRadius={'8px'}>{user?.salesman ? 'Anunciante' : 'Comprador'} </Text>
                </Flex>
                <Text>{user?.description}</Text>
            </Box >
        </Flex >
    );
}

export default ProfileDiv
