import {
    Box,
    Button,
    Center,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    Input,
    Text,
    Textarea,
    useRadioGroup
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { IUserRequest } from "../../../interfaces/user";
import { useUserContext } from "../../../providers/UserContext";
import { userSchema } from "../../../schemas/user.schema";
import { RadioCard } from "../RadioCard";

export function FormRegister() {
    const { isMobile, registerSubmit } = useUserContext();
    const options = ["Comprador", "Anunciante"];
    const [salesman, setSalesman] = useState({});

    const valueRadio = (value: any) => {
        setSalesman(value);
    };

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: "framework",
        defaultValue: "Comprador",
        onChange: valueRadio,
    });

    const group = getRootProps();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUserRequest>({ resolver: yupResolver(userSchema) });

    const onSubmit = (data: any) => {
        let variant = {};

        if (salesman === "Anunciante") {
            variant = { salesman: true };
        } else {
            variant = { salesman: false };
        }

        const dataForm = {
            ...data,
            ...variant,
        };

        registerSubmit(dataForm);
    };

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
                >
                    <Text fontSize={"24px"} fontWeight={"500"}>
                        Cadastro
                    </Text>

                    <FormControl
                        as={"form"}
                        onSubmit={handleSubmit(onSubmit)}
                        display={"flex"}
                        flexDirection={"column"}
                        gap={"1.5rem"}
                    >
                        <Text mt={"1.5rem"}>Informações Pessoais</Text>

                        <Box>
                            <FormLabel>Nome</FormLabel>
                            <Input
                                placeholder="Ex: Tobias"
                                {...register("name")}
                            />
                            <Text color="red">{errors.name?.message}</Text>
                        </Box>

                        <Box>
                            <FormLabel>Email</FormLabel>
                            <Input
                                placeholder="Ex: victor@mail.com"
                                {...register("email")}
                            />
                            <Text color="red">{errors.email?.message}</Text>
                        </Box>

                        <Box>
                            <FormLabel>Senha</FormLabel>
                            <Input
                                placeholder="Ex: Digitar senha"
                                {...register("password")}
                            />
                            <Text color="red">{errors.password?.message}</Text>
                        </Box>

                        <Box>
                            <FormLabel>Confirmar senha</FormLabel>
                            <Input
                                placeholder="Ex: Confirmar senha"
                                {...register("passwordConfirm")}
                            />
                            <Text color="red">
                                {errors.passwordConfirm?.message}
                            </Text>
                        </Box>

                        <Box>
                            <FormLabel>CPF</FormLabel>
                            <Input
                                placeholder="Ex: 000.000.000-00"
                                as={InputMask}
                                mask="999.999.999-99"
                                maskChar={null}
                                {...register("cpf")}
                            />
                            <Text color="red">{errors.cpf?.message}</Text>
                        </Box>

                        <Box>
                            <FormLabel>Celular</FormLabel>
                            <Input
                                placeholder="Ex: (DDD) 94002-8922"
                                as={InputMask}
                                mask="(99)9 9999-9999"
                                maskChar={null}
                                {...register("phone")}
                            />
                            <Text color="red">{errors.phone?.message}</Text>
                        </Box>

                        <Box>
                            <FormLabel>Data de nascimento</FormLabel>
                            <Input
                                placeholder="Ex: 00/00/00"
                                as={InputMask}
                                mask="99/99/9999"
                                maskChar={null}
                                {...register("birthdate")}
                            />
                            <Text color="red">{errors.birthdate?.message}</Text>
                        </Box>
                        <Box>
                            <FormLabel>Imagem de perfil</FormLabel>
                            <Input
                                placeholder="Ex: https://"
                                {...register("urlImg")}
                            />
                            <Text color="red">{errors.urlImg?.message}</Text>
                        </Box>

                        <Box>
                            <FormLabel>Descrição</FormLabel>
                            <Textarea
                                placeholder="Digitar descrição"
                                {...register("description")}
                                resize={"none"}
                            />
                            <Text color="red">
                                {errors.description?.message}
                            </Text>
                        </Box>

                        <Text>Informações de endereço</Text>

                        <Box>
                            <FormLabel>CEP</FormLabel>
                            <Input
                                placeholder="Ex: 00000-000"
                                as={InputMask}
                                mask="99999-999"
                                maskChar={null}
                                {...register("cep")}
                            />
                            <Text color="red">{errors.cep?.message}</Text>
                        </Box>

                        <Flex gap={"1rem"}>
                            <Box>
                                <FormLabel>Estado</FormLabel>
                                <Input
                                    placeholder="Ex: São Paulo"
                                    {...register("state")}
                                />
                                <Text color="red">{errors.state?.message}</Text>
                            </Box>
                            <Box>
                                <FormLabel>Cidade</FormLabel>
                                <Input
                                    placeholder="Ex: Morumbi"
                                    {...register("city")}
                                />
                                <Text color="red">{errors.city?.message}</Text>
                            </Box>
                        </Flex>

                        <Box>
                            <FormLabel>Rua</FormLabel>
                            <Input
                                placeholder="Ex: Rua do sol"
                                {...register("street")}
                            />
                            <Text color="red">{errors.state?.message}</Text>
                        </Box>

                        <Flex gap={"1rem"}>
                            <Box>
                                <FormLabel>Número</FormLabel>
                                <Input
                                    placeholder="Ex: 4321"
                                    {...register("number")}
                                />
                                <Text color="red">
                                    {errors.number?.message}
                                </Text>
                            </Box>
                            <Box>
                                <FormLabel>Complemento</FormLabel>
                                <Input
                                    placeholder="Ex: apart 307"
                                    {...register("complement")}
                                />
                            </Box>
                        </Flex>

                        <Text>Tipo de conta</Text>
                        <HStack
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"space-around"}
                            {...group}
                        >
                            {options.map((value) => {
                                const radio = getRadioProps({ value });

                                return (
                                    <>
                                        <Input
                                            display={"none"}
                                            value={"true"}
                                        />
                                        <RadioCard key={value} {...radio}>
                                            {value}
                                        </RadioCard>
                                    </>
                                );
                            })}
                        </HStack>

                        <Button
                            type="submit"
                            bg="brand.1"
                            color={"white"}
                            _hover={{ bg: "brand.3" }}
                        >
                            Finalizar cadastro
                        </Button>
                    </FormControl>
                </Center>
            </Flex>
        </>
    );
}
