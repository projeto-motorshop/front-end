import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    useDisclosure,
    Input,
    ModalCloseButton,
    Textarea,
    FormLabel,
    Box,
    FormControl,
    Flex,
    Text,
    UseDisclosureProps,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IUserUpdate } from "../../../interfaces/user";
import { updateUserSchema } from "../../../schemas/user.schema";
import ReactInputMask from "react-input-mask";

export function EditUserModal({ onClose }: UseDisclosureProps) {
    const formSubmit = (data: any) => {
        //TODO: conecta na api
        console.log(data);

        // onClose();
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUserUpdate>({
        resolver: yupResolver(updateUserSchema),
    });

    return (
        <>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Editar perfil</ModalHeader>
                <ModalCloseButton />
                <FormControl
                    display={"flex"}
                    flexDir={"column"}
                    gap={"1rem"}
                    as={"form"}
                    onSubmit={handleSubmit(formSubmit)}
                >
                    <ModalBody>
                        <Flex flexDir={"column"} gap={"1rem"}>
                            <Text> Infomações pessoais</Text>
                            <Box>
                                <FormLabel>Nome</FormLabel>
                                <Input
                                    placeholder="Nome"
                                    {...register("name")}
                                />
                                {errors.name?.message}
                            </Box>
                            <Box>
                                <FormLabel>E-mail</FormLabel>
                                <Input
                                    placeholder="E-mail"
                                    {...register("email")}
                                />
                                {errors.email?.message}
                            </Box>
                            <Box>
                                <FormLabel>CPF</FormLabel>
                                <Input
                                    placeholder="CPF"
                                    as={ReactInputMask}
                                    mask="999.999.999-99"
                                    maskChar={null}
                                    {...register("cpf")}
                                />
                                {errors.cpf?.message}
                            </Box>
                            <Box>
                                <FormLabel>Celular</FormLabel>
                                <Input
                                    placeholder="Celular"
                                    as={ReactInputMask}
                                    mask="(99)9 9999-9999"
                                    maskChar={null}
                                    {...register("phone")}
                                />
                                {errors.phone?.message}
                            </Box>
                            <Box>
                                <FormLabel>Data de nascimento</FormLabel>
                                <Input
                                    type="date"
                                    placeholder="Data de nascimento"
                                    {...register("birthdate")}
                                />
                                {errors.birthdate?.message}
                            </Box>
                            <Box>
                                <FormLabel>Descrição</FormLabel>
                                <Textarea
                                    placeholder="Descrição"
                                    resize={"none"}
                                    {...register("description")}
                                />
                                {errors.description?.message}
                            </Box>
                        </Flex>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            _hover={{ bg: "grey.5" }}
                            mr={3}
                            onClick={onClose}
                        >
                            Cancelar
                        </Button>
                        <Button
                            bg={"brand.3"}
                            color={"white"}
                            _hover={{ bg: "brand.2" }}
                            type="submit"
                        >
                            Salvar alterações
                        </Button>
                    </ModalFooter>
                </FormControl>
            </ModalContent>
        </>
    );
}
