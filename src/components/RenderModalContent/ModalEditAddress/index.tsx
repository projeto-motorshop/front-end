import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    useDisclosure,
    ModalCloseButton,
    Input,
    Text,
    FormLabel,
    Flex,
    Box,
    FormControl,
    UseDisclosureProps,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import ReactInputMask from "react-input-mask";
import { IAddressRequest } from "../../../interfaces/user";
import { addressSchema } from "../../../schemas/user.schema";
import { useForm } from "react-hook-form";

export function EditAddressModal({ onClose }: UseDisclosureProps) {
    const formSubmit = (data: any) => {
        //TODO: conecta na api
        console.log(data);

        // onClose();
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IAddressRequest>({
        resolver: yupResolver(addressSchema),
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
                    onSubmit={handleSubmit(formSubmit)}
                >
                    <ModalBody>
                        <Flex flexDir={"column"} gap={"1rem"}>
                            <Text>Infomações de endereço</Text>
                            <Box>
                                <FormLabel>CEP</FormLabel>
                                <Input
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
                                        placeholder="Estado"
                                        {...register("state")}
                                    />
                                    {errors.state?.message}
                                </Flex>
                                <Flex flexDir={"column"}>
                                    <FormLabel>Cidade</FormLabel>
                                    <Input
                                        placeholder="Cidade"
                                        {...register("city")}
                                    />
                                    {errors.city?.message}
                                </Flex>
                            </Flex>
                            <Box>
                                <FormLabel>Rua</FormLabel>
                                <Input
                                    placeholder="Rua"
                                    {...register("street")}
                                />
                                {errors.street?.message}
                            </Box>
                            <Flex gap={"2rem"}>
                                <Flex flexDir={"column"}>
                                    <FormLabel>Número</FormLabel>
                                    <Input
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
