import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserLogin } from "../interfaces/user";


const loginSchema: SchemaOf<IUserLogin> = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required()
});

export default loginSchema