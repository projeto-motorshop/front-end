import { Flex, Text } from "@chakra-ui/react";

export const ResetPasswordHeader = () => {
    return (
        <>
            <Flex
                justifyContent={"center"}
                alignItems={"center"}
                // marginTop={"5rem"}
                paddingTop={"6rem"}
                marginBottom={"3rem"}
            >
                <Text
                    bgGradient="linear(to-r, grey.1 10%, brand.1 90%)"
                    bgClip="text"
                    fontWeight="extrabold"
                    fontSize={"32px"}
                >
                    Motor Shop
                </Text>
            </Flex>
        </>
    );
};
