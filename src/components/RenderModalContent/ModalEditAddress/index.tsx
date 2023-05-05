import {
    Button,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    Text,
    FormLabel,
    Flex,
    Box,
    FormControl,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import ReactInputMask from "react-input-mask";
import { IAddressUpdate } from "../../../interfaces/user";
import { updateAddressSchema } from "../../../schemas/user.schema";
import { useForm } from "react-hook-form";
import { useUserContext } from "../../../providers/UserContext";

export function EditAddressModal() {
    const { patchUserAddress, onClose, user } = useUserContext();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IAddressUpdate>({
        resolver: yupResolver(updateAddressSchema),
    });

    return (
        <>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Editar Endereço</ModalHeader>
                <ModalCloseButton />
                <FormControl
                    display={"flex"}
                    flexDir={"column"}
                    gap={"1rem"}
                    as={"form"}
                    onSubmit={handleSubmit(patchUserAddress)}
                >
                    <ModalBody>
                        <Flex flexDir={"column"} gap={"1rem"}>
                            <Text>Infomações de endereço</Text>
                            <Box>
                                <FormLabel>CEP</FormLabel>
                                <Input
                                    defaultValue={user?.address.cep}
                                    placeholder="CEP"
                                    as={ReactInputMask}
                                    mask="99999-999"
                                    maskChar={null}
                                    {...register("cep")}
                                />
                                {errors.cep?.message}
                            </Box>
                            <Flex gap={"2rem"}>
                                <Flex flexDir={"column"}>
                                    <FormLabel>Estado</FormLabel>
                                    <Input
                                        defaultValue={user?.address.state}
                                        placeholder="Estado"
                                        {...register("state")}
                                    />
                                    {errors.state?.message}
                                </Flex>
                                <Flex flexDir={"column"}>
                                    <FormLabel>Cidade</FormLabel>
                                    <Input
                                        defaultValue={user?.address.city}
                                        placeholder="Cidade"
                                        {...register("city")}
                                    />
                                    {errors.city?.message}
                                </Flex>
                            </Flex>
                            <Box>
                                <FormLabel>Rua</FormLabel>
                                <Input
                                    defaultValue={user?.address.street}
                                    placeholder="Rua"
                                    {...register("street")}
                                />
                                {errors.street?.message}
                            </Box>
                            <Flex gap={"2rem"}>
                                <Flex flexDir={"column"}>
                                    <FormLabel>Número</FormLabel>
                                    <Input
                                        defaultValue={user?.address.number}
                                        placeholder="Número"
                                        {...register("number")}
                                    />
                                    {errors.number?.message}
                                </Flex>
                                <Flex flexDir={"column"}>
                                    <FormLabel>Complemento</FormLabel>
                                    <Input
                                        placeholder="Complemento"
                                        {...register("complement")}
                                    />
                                    {errors.complement?.message}
                                </Flex>
                            </Flex>
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
