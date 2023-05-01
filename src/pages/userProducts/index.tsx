import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FooterHome } from "../../components/FooterHome";
import { useUserContext } from "../../providers/UserContext";
import api from "../../service/api";
import { UserProductsCard } from './UserProductsCard/index';
import ProfileDiv from "./profileDiv";

function UserProducts() {
    const { userData, setUserData, isMobile } = useUserContext();
    const { userId } = useParams()


    useEffect(() => {
        (async () => {
            try {
                const { data } = await api.get(`/users/${userId}`);
                setUserData(data)
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);


    return (
        <Flex flexDirection={"column"} alignItems={"center"} overflow={'hidden'} >

            <Box
                w="100%"
                height="14rem"
                pos="absolute"
                bg="brand.1"
            />
            <Flex bg='#ffffff' h={'20rem'} pos={"relative"} w={'80%'} top={'100px'} height={'244px'}>
                <ProfileDiv />
            </Flex>
            <Flex mt={'10rem'} width={'100%'} > <Text ml={'7rem'} fontSize={'24px'} fontWeight={'bold'} justifyContent={'flex-start'}>Anuncios</Text></Flex>

            {isMobile ?
                <> <Grid templateColumns='repeat(4, 1fr)' >
                    <UserProductsCard />
                </Grid>
                </> :
                <>
                    <Flex overflow={'auto'} gap={'1rem'} width={'100%'}><UserProductsCard /></Flex>
                </>}


            <FooterHome />
        </Flex >
    );
}

export default UserProducts
