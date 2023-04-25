import * as yup from "yup";
import { SchemaOf } from "yup";
import {
    IAddressRequest,
    IAddressUpdate,
    IPasswordRecovery,
    IUserUpdate,
} from "../interfaces/user";

const regexPhone =
    /^\s*(\d{2}|\d{0})|\(\d{2}|\d{0}\)?[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/;

const userSchema = yup.object().shape({
    complement: yup.string().notRequired().nullable(),
    number: yup.string().required("Número da casa Obrigatório"),
    street: yup.string().required("Rua Obrigatória"),
    cep: yup.string().required("CEP Obrigatório"),
    state: yup.string().required("Estado Obrigatório"),
    city: yup.string().required("Cidade Obrigatório"),
    // salesman: yup.string().required(),
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
    urlImg: yup.string().notRequired().nullable(),
});

const addressSchema: SchemaOf<IAddressRequest> = yup.object().shape({
    complement: yup.string().notRequired().nullable(),
    number: yup.string().required(),
    street: yup.string().required(),
    cep: yup.string().required(),
    state: yup.string().required(),
    city: yup.string().required(),
});

const updateAddressSchema: SchemaOf<IAddressUpdate> = yup.object().shape({
    complement: yup.string().notRequired().nullable(),
    number: yup.string().notRequired(),
    street: yup.string().notRequired(),
    cep: yup.string().notRequired(),
    state: yup.string().notRequired(),
    city: yup.string().notRequired(),
});

const updateUserSchema: yup.SchemaOf<IUserUpdate> = yup.object().shape({
    description: yup.string().notRequired().nullable(),
    birthdate: yup.string().notRequired(),
    salesman: yup.boolean().notRequired(),
    cpf: yup.string().notRequired(),
    phone: yup.string().notRequired(),
    password: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    name: yup.string().notRequired(),
    urlImg: yup.string().notRequired().nullable(),
});

const passwordRecoverySchema: yup.SchemaOf<IPasswordRecovery> = yup
    .object()
    .shape({
        email: yup.string().email().required(),
    });

const passwordResetSchema = yup.object().shape({
    password: yup.string().required("Senha Obrigatória"),
    passwordConfirm: yup
        .string()
        .oneOf(
            [yup.ref("password")],
            "Confirmação de senha deve ser igual a senha."
        ),
});

export {
    userSchema,
    updateUserSchema,
    addressSchema,
    updateAddressSchema,
    passwordRecoverySchema,
    passwordResetSchema,
};
