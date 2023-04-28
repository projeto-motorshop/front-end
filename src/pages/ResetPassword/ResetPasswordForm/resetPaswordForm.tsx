import {
    Box,
    Button,
    Center,
    Flex,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useUserContext } from "../../../providers/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { passwordResetSchema } from "../../../schemas/user.schema";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import React from "react";
import { useParams } from "react-router-dom";

export const ResetPasswordForm = () => {
    const { isMobile, resetPasswordFunction } = useUserContext();
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    const { id } = useParams();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(passwordResetSchema) });

    const onSubmit = (data: any) => {
        resetPasswordFunction(data, id as string);
    };

    return (
        <>
            <Flex alignItems={"center"} justifyContent={"center"}>
                <Center
                    display={"flex"}
                    flexDirection={"column"}
                    w={isMobile ? "411px" : "300px"}
                >
                    <Text
                        fontSize={"24px"}
                        fontWeight={"500"}
                        paddingBottom={"1rem"}
                    >
                        Digite sua nova senha
                    </Text>
                    <FormControl
                        as={"form"}
                        display={"flex"}
                        flexDirection={"column"}
                        gap={"1.5rem"}
                        onSubmit={handleSubmit(onSubmit)}
                        isRequired
                    >
                        <Box>
                            <FormLabel>Senha</FormLabel>
                            <InputGroup size="md">
                                <Input
                                    placeholder="Nova senha"
                                    {...register("password")}
                                    type={show ? "text" : "password"}
                                ></Input>
                                <InputRightElement width="4.5rem">
                                    <Button
                                        h="1.75rem"
                                        size="sm"
                                        onClick={handleClick}
                                    >
                                        {show ? (
                                            <AiOutlineEyeInvisible />
                                        ) : (
                                            <AiOutlineEye />
                                        )}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </Box>

                        <Box>
                            <FormLabel> Confirmar senha</FormLabel>
                            <InputGroup size="md">
                                <Input
                                    placeholder="Confirmar senha"
                                    {...register("passwordConfirm")}
                                    type={show ? "text" : "password"}
                                ></Input>
                                <InputRightElement width="4.5rem">
                                    <Button
                                        h="1.75rem"
                                        size="sm"
                                        onClick={handleClick}
                                    >
                                        {show ? (
                                            <AiOutlineEyeInvisible />
                                        ) : (
                                            <AiOutlineEye />
                                        )}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </Box>

                        <Button
                            type="submit"
                            bg="brand.1"
                            color={"white"}
                            _hover={{ bg: "brand.3" }}
                        >
                            Confirmar atualização de senha
                        </Button>
                    </FormControl>
                </Center>
            </Flex>
        </>
    );
};
