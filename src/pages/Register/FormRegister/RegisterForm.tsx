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
import { useUserContext } from "../../../providers/UserContext";
import { useForm } from "react-hook-form";
import { IUserRequest } from "../../../interfaces/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../../../schemas/user.schema";
import InputMask from "react-input-mask";

export function FormRegister() {
    const options = ["Comprador", "Anunciante"];
    const { isMobile } = useUserContext();

    const onSubmit = (data: any) => {
        if (data == "Anunciante") {
            console.log("verdade");
        } else {
            console.log("false");
        }
    };

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: "framework",
        defaultValue: "react",
        onChange: onSubmit,
    });

    const group = getRootProps();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUserRequest>({ resolver: yupResolver(userSchema) });

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

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        // as={"form"}
                        // display={"flex"}
                        // flexDirection={"column"}
                        // gap={"1.5rem"}
                        // isRequired
                    >
                        <input
                            placeholder="asdasdsa"
                            {...register("name")}
                        ></input>
                        <Text mt={"1.5rem"}>Informações Pessoais</Text>
                        <Box>
                            <FormLabel>Nome</FormLabel>
                            <Input
                                placeholder="Ex: Tobias"
                                {...register("name")}
                            />
                            <FormErrorMessage>
                                {errors.name?.message}
                            </FormErrorMessage>
                        </Box>

                        <Box>
                            <FormLabel>Email</FormLabel>
                            <Input
                                placeholder="Ex: victor@mail.com"
                                {...register("email")}
                            />
                        </Box>

                        <Box>
                            <FormLabel>Senha</FormLabel>
                            <Input
                                placeholder="Ex: Digitar senha"
                                {...register("password")}
                            />
                        </Box>

                        <Box>
                            <FormLabel>Confirmar senha</FormLabel>
                            <Input
                                placeholder="Ex: Confirmar senha"
                                {...register("passwordConfirm")}
                            />
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
                        </Box>

                        <Box>
                            <FormLabel>Descrição</FormLabel>
                            <Textarea
                                placeholder="Digitar descrição"
                                {...register("description")}
                                resize={"none"}
                            />
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
                        </Box>

                        <Flex gap={"1rem"}>
                            <Box>
                                <FormLabel>Estado</FormLabel>
                                <Input
                                    placeholder="Ex: São Paulo"
                                    {...register("state")}
                                />
                            </Box>
                            <Box>
                                <FormLabel>Cidade</FormLabel>
                                <Input
                                    placeholder="Ex: Morumbi"
                                    {...register("city")}
                                />
                            </Box>
                        </Flex>

                        <Box>
                            <FormLabel>Rua</FormLabel>
                            <Input
                                placeholder="Ex: Rua do sol"
                                {...register("street")}
                            />
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
                                    <RadioCard
                                        {...register("complement")}
                                        key={value}
                                        {...radio}
                                    >
                                        {value}
                                    </RadioCard>
                                );
                            })}
                        </HStack>

                        <Button type="submit" bg="brand.1">
                            Finalizar cadastro
                        </Button>
                    </form>
                </Center>
            </Flex>
        </>
    );
}
