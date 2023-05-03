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
import { useUserContext } from "../../../providers/UserContext";

export function EditUserModal() {
    const { patchUser, onClose, isMobile, deleteUser, user } = useUserContext();

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
                    onSubmit={handleSubmit(patchUser)}
                >
                    <ModalBody>
                        <Flex flexDir={"column"} gap={"1rem"}>
                            <Text> Infomações pessoais</Text>
                            <Box>
                                <FormLabel>Nome</FormLabel>
                                <Input
                                    defaultValue={user?.name}
                                    placeholder="Nome"
                                    {...register("name")}
                                />
                                {errors.name?.message}
                            </Box>
                            <Box>
                                <FormLabel>E-mail</FormLabel>
                                <Input
                                    defaultValue={user?.email}
                                    placeholder="E-mail"
                                    {...register("email")}
                                />
                                {errors.email?.message}
                            </Box>
                            <Box>
                                <FormLabel>CPF</FormLabel>
                                <Input
                                    defaultValue={user?.cpf}
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
                                    defaultValue={user?.phone}
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
                                <FormLabel>Imagem de Perfil</FormLabel>
                                <Input
                                    defaultValue={user?.urlImg}
                                    placeholder="https://image.com"
                                    {...register("urlImg")}
                                />
                                {errors.urlImg?.message}
                            </Box>
                            <Box>
                                <FormLabel>Descrição</FormLabel>
                                <Textarea
                                    defaultValue={user?.description}
                                    placeholder="Descrição"
                                    resize={"none"}
                                    {...register("description")}
                                />
                                {errors.description?.message}
                            </Box>
                        </Flex>
                    </ModalBody>
                    <ModalFooter
                        flexDir={isMobile ? "row" : "column"}
                        gap={"1rem"}
                    >
                        <Button _hover={{ bg: "grey.5" }} onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button
                            bg={"alert.2"}
                            color={"alert.1"}
                            _hover={{ bg: "brand.3" }}
                            onClick={deleteUser}
                        >
                            Excluir Perfil
                        </Button>
                        <Button
                            bg={"brand.2"}
                            color={"white"}
                            _hover={{ bg: "brand.3" }}
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
