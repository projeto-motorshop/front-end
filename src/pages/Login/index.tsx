import { useEffect, useState } from "react";
import {
    Box,
    Button,
    Center,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Modal,
    Stack,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import { HeaderHome } from "../../components/HeaderHome";
import { FooterHome } from "../../components/FooterHome";
import { useUserContext } from "../../providers/UserContext";
import { IUserLogin } from "../../interfaces/user";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../../schemas/login.schema";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { PasswordRecoveryModal } from "../../components/RenderModalContent/ModalPasswordRecovery";

const Login = () => {
    const { loginFunction } = useUserContext();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [overlay, setOverlay] = useState(<PasswordRecoveryModal />);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUserLogin>({ resolver: yupResolver(loginSchema) });
    return (
        <Box h="100vh" display="flex" flexDirection="column">
            <HeaderHome />
            <Center flex="1" bg={"grey.8"}>
                <Box
                    bg="white"
                    p={8}
                    borderRadius="lg"
                    padding="3rem"
                    w={"25rem"}
                >
                    <Heading size="lg" mb={6}>
                        Login
                    </Heading>
                    <FormControl
                        as={"form"}
                        onSubmit={handleSubmit(loginFunction)}
                    >
                        <Stack spacing={4}>
                            <Box>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    type="email"
                                    placeholder="Digitar email"
                                    {...register("email")}
                                />
                                <Text color="red">{errors.email?.message}</Text>
                            </Box>

                            <Box>
                                <FormLabel>Senha</FormLabel>
                                <Input
                                    type="password"
                                    placeholder="Digitar senha"
                                    {...register("password")}
                                />
                                <Text color="red">
                                    {errors.password?.message}
                                </Text>
                            </Box>
                            <Button
                                bg={"transparent"}
                                _hover={{ bg: "transparent" }}
                                onClick={() => {
                                    setOverlay(
                                        <PasswordRecoveryModal
                                            onClose={onClose}
                                        />
                                    );
                                    onOpen();
                                }}
                            >
                                Esqueci minha senha
                            </Button>
                            <Button
                                bg={"brand.1"}
                                color={"white"}
                                _hover={{ bg: "brand.3" }}
                                type="submit"
                            >
                                Entrar
                            </Button>
                            <Text textAlign={"center"}>
                                Ainda não possui conta?
                            </Text>
                            <Button
                                variant="outline"
                                type="submit"
                                _hover={{ bg: "grey.5" }}
                            >
                                <Link to={"/register"}>Cadastrar</Link>
                            </Button>
                        </Stack>
                    </FormControl>
                </Box>
            </Center>
            <FooterHome />
            <Modal isOpen={isOpen} onClose={onClose}>
                {overlay}
            </Modal>
        </Box>
    );
};

export default Login;
