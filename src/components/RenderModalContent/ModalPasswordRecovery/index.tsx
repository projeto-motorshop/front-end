import {
    Button,
    FormControl,
    FormLabel,
    Input,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    UseDisclosureProps,
} from "@chakra-ui/react";
// import {BeatLoader} from "@chakra-ui/icons"
import React from "react";
import { useForm } from "react-hook-form";
import { IPasswordRecovery } from "../../../interfaces/user";
import { passwordRecoverySchema } from "../../../schemas/user.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUserContext } from "../../../providers/UserContext";

export function PasswordRecoveryModal({ onClose }: UseDisclosureProps) {
    const { passwordRecoveryFunction, loading } = useUserContext();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IPasswordRecovery>({
        resolver: yupResolver(passwordRecoverySchema),
    });

    return (
        <>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Recuperação de senha</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl
                        as={"form"}
                        onSubmit={handleSubmit(passwordRecoveryFunction)}
                    >
                        <FormLabel>
                            Digite o E-mail da conta cadastrada
                        </FormLabel>
                        <Input
                            placeholder="email@gmail.com"
                            {...register("email")}
                        />
                        {errors.email?.message}

                        <ModalFooter>
                            <Button
                                type="submit"
                                colorScheme="blue"
                                mr={3}
                                isLoading={loading}
                                loadingText="Enviando"
                            >
                                Enviar
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </FormControl>
                </ModalBody>
            </ModalContent>
        </>
    );
}
