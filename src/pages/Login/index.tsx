import { Box, Button, Center, Flex, FormControl, FormLabel, Input, Link, Text } from '@chakra-ui/react';
import { useForm } from "react-hook-form";
// import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { FooterHome } from '../../components/FooterHome';
import { useUserContext } from '../../providers/UserContext';
import loginSchema from '../../schemas/login.schema';
import { IUserLogin } from './../../interfaces/user';


export const Login = () => {
    const { isMobile, loginFunction } = useUserContext();
    const { register, handleSubmit, formState: { errors } } = useForm<IUserLogin>(
        { resolver: yupResolver(loginSchema) })



    return (
        <>
            <Flex
                w={"100%"}
                alignItems={"center"}
                justifyContent={"center"}
                bg={"grey.8"}
                py={"2.5rem"}

            >
                <Center
                    display={"flex"}
                    flexDirection={"column"}
                    w={isMobile ? "411px" : "320px"}
                    bg={"grey.10"}
                    padding={"2rem"}
                    borderRadius={"8px"}
                    h={isMobile ? '66vh' : '80vh'}
                >

                    <FormControl
                        as={"form"}
                        onSubmit={handleSubmit(loginFunction)}
                        display={"flex"}
                        flexDirection={"column"}
                        gap={"1.5rem"}

                    >
                        <Text mt={"1.5rem"} fontSize={'28px'}>Login</Text>
                        <Box>
                            <FormLabel>Email</FormLabel>
                            <Input
                                placeholder="Digite aqui seu Usuário"
                                {...register("email")}
                            />
                            {errors.email?.message}
                        </Box>

                        <Box>
                            <FormLabel>Senha</FormLabel>
                            <Input
                                placeholder="Digite sua senha"
                                {...register("password")}
                            />
                            {errors.password?.message}
                        </Box>

                        <Text>Esqueceu sua senha?</Text>

                        <Button type="submit" bg="brand.1" color={'#ffffff'} >
                            Entrar
                        </Button>

                        <p>ainda n possui cadastro?</p>
                        <Flex w={'100%'}>
                            <Link href={'/register'} w={'100%'} >
                                <Button type="button" bg="brand.1" color={'#ffffff'} w={'100%'}>
                                    Cadastrar
                                </Button>
                            </Link>
                        </Flex>
                    </FormControl>
                </Center>
            </Flex>
            <FooterHome />
        </>
    );
}



