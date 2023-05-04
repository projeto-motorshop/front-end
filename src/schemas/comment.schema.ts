import { SchemaOf } from "yup";
import * as yup from "yup";
import { ICommentRequest } from "../interfaces/comment";

export const commentSchema: SchemaOf<ICommentRequest> = yup.object().shape({
    description: yup.string().required(),
});
