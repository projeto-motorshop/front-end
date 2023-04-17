import {
    Box,
    Button,
    Center,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    HStack,
    Input,
    Text,
    Textarea,
    useRadioGroup,
} from "@chakra-ui/react";
import { RadioCard } from "../RadioCard";
import * as yup from "yup";
import { useUserContext } from "../../../providers/UserContext";
import { useForm } from "react-hook-form";
import { IUserRequest } from "../../../interfaces/user";
import { yupResolver } from "@hookform/resolvers/yup";
import InputMask from "react-input-mask";
import { userSchema } from "../../../schemas/user.schema";
import { useState } from "react";

export function FormRegister() {
    const userSchema = yup.object().shape({
        complement: yup.string().notRequired().nullable(),
        number: yup.string().required("Número da casa Obrigatório"),
        street: yup.string().required("Rua Obrigatória"),
        cep: yup.string().required("CEP Obrigatório"),
        state: yup.string().required("Estado Obrigatório"),
        city: yup.string().required("Cidade Obrigatório"),
        // salesman: yup.boolean().required(),
        description: yup.string().notRequired().nullable(),
        birthdate: yup.date().required("Data de aniversário Obrigatório"),
        cpf: yup.string().required("CPF Obrigatório"),
        phone: yup.string().required("Número de telefone Obrigatório"),
        password: yup.string().required("Senha Obrigatório"),
        passwordConfirm: yup
            .string()
            .oneOf(
                [yup.ref("password")],
                "Confirmação de senha deve ser igual a senha."
            ),
        email: yup.string().email().required("E-mail Obrigatório"),
        name: yup.string().required("Nome Obrigatório"),
    });

    const { isMobile } = useUserContext();
    const options = ["Comprador", "Anunciante"];
    const [salesman, setSalesman] = useState({});

    const valueRadio = (value: any) => {
        setSalesman(value);
    };

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: "framework",
        defaultValue: "react",
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

        if (salesman === "Comprador") {
            variant = { salesman: true };
        } else {
            variant = { salesman: false };
        }

        const dataForm = {
            ...data,
            ...variant,
        };
        console.log("FUNCIONOU?", dataForm);
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
                            <FormLabel>Imagem de perfil</FormLabel>
                            <Input
                                placeholder="Ex: https://"
                                {...register("urlImg")}
                            />
                            {errors.urlImg?.message}
                        </Box>

                        <Box>
                            <FormLabel>Nome</FormLabel>
                            <Input
                                placeholder="Ex: Tobias"
                                {...register("name")}
                            />
                            {errors.name?.message}
                        </Box>

                        <Box>
                            <FormLabel>Email</FormLabel>
                            <Input
                                placeholder="Ex: victor@mail.com"
                                {...register("email")}
                            />
                            {errors.email?.message}
                        </Box>

                        <Box>
                            <FormLabel>Senha</FormLabel>
                            <Input
                                placeholder="Ex: Digitar senha"
                                {...register("password")}
                            />
                            {errors.password?.message}
                        </Box>

                        <Box>
                            <FormLabel>Confirmar senha</FormLabel>
                            <Input
                                placeholder="Ex: Confirmar senha"
                                {...register("passwordConfirm")}
                            />
                            {errors.passwordConfirm?.message}
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
                            {errors.cpf?.message}
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
                            {errors.phone?.message}
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
                            {errors.birthdate?.message}
                        </Box>

                        <Box>
                            <FormLabel>Descrição</FormLabel>
                            <Textarea
                                placeholder="Digitar descrição"
                                {...register("description")}
                                resize={"none"}
                            />
                            {errors.description?.message}
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
                            {errors.cep?.message}
                        </Box>

                        <Flex gap={"1rem"}>
                            <Box>
                                <FormLabel>Estado</FormLabel>
                                <Input
                                    placeholder="Ex: São Paulo"
                                    {...register("state")}
                                />
                                {errors.state?.message}
                            </Box>
                            <Box>
                                <FormLabel>Cidade</FormLabel>
                                <Input
                                    placeholder="Ex: Morumbi"
                                    {...register("city")}
                                />
                                {errors.city?.message}
                            </Box>
                        </Flex>

                        <Box>
                            <FormLabel>Rua</FormLabel>
                            <Input
                                placeholder="Ex: Rua do sol"
                                {...register("street")}
                            />
                            {errors.state?.message}
                        </Box>

                        <Flex gap={"1rem"}>
                            <Box>
                                <FormLabel>Número</FormLabel>
                                <Input
                                    placeholder="Ex: 4321"
                                    {...register("number")}
                                />
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
                                        {value == "Comprador"}
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

                        <Button type="submit" bg="brand.1">
                            Finalizar cadastro
                        </Button>
                    </FormControl>
                </Center>
            </Flex>
        </>
    );
}
