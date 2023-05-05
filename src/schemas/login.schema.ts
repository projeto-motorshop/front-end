import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserLogin } from "../interfaces/user";

const loginSchema: SchemaOf<IUserLogin> = yup.object().shape({
    email: yup.string().required("e-mail é um campo obrigatório"),
    password: yup.string().required("Senha é um campo obrigatório"),
});

export default loginSchema;
