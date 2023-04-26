import { Box, Flex } from "@chakra-ui/react";
import { FooterHome } from "../../components/FooterHome";
import { ListCars } from "../Profile/ListCars";
import { UserProductsCard } from './UserProductsCard/index';
import ProfileDiv from "./profileDiv";

function UserProducts() {

    // const { userLogged, isMobile } = useUserContext();

    // useEffect(() => {
    //     userLogged();
    // }, []);

    return (
        <Flex flexDirection={"column"} alignItems={"center"}>

            <Box
                w="100%"
                height="14rem"
                pos="absolute"
                bg="brand.1"
            />
            <Flex bg='#ffffff' h={'20rem'} pos={"relative"} w={'80%'} top={'100px'} height={'244px'}>
                <ProfileDiv />
            </Flex>
            <ListCars>
                <UserProductsCard />
            </ListCars>

            <FooterHome />
        </Flex >
    );
}

export default UserProducts
