import * as yup from "yup";
import { SchemaOf } from "yup";
import { ICarsRequest, ICarsUpdate, IImageRequest } from "../interfaces/car";

const reqImgSchema: SchemaOf<IImageRequest[]> = yup.array().of(
    yup.object().shape({
        urlImg: yup.string().notRequired().nullable(),
    })
);

const reqCarSchema: SchemaOf<ICarsRequest> = yup.object().shape({
    images: reqImgSchema,
    description: yup.string().required(),
    color: yup.string().required(),
    frontImg: yup.string().required(),
    priceFipe: yup.string().required(),
    price: yup.number().required(),
    mileage: yup.number().required(),
    fuel: yup.string().required(),
    year: yup.string().required(),
    model: yup.string().required(),
    brand: yup.string().required(),
});

const updateCarSchema: SchemaOf<ICarsUpdate> = yup.object().shape({
    images: reqImgSchema,
    description: yup.string().notRequired(),
    color: yup.string().notRequired(),
    isPublished: yup.boolean().notRequired(),
    frontImg: yup.string().notRequired(),
    priceFipe: yup.string().notRequired(),
    price: yup.string().notRequired(),
    mileage: yup.string().notRequired(),
    fuel: yup.string().notRequired(),
    year: yup.string().notRequired(),
    model: yup.string().notRequired(),
    brand: yup.string().notRequired(),
});

export { reqCarSchema, updateCarSchema };
