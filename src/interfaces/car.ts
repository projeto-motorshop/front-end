import { IUser, IUserCar } from "./user";

export interface IImageRequest {
    urlImg: string;
}
export interface IImageResponse {
    id: string;
    urlImg: string;
    carId: string;
}

export interface ICarsResponse {
    id: string;
    brand: string;
    color: string;
    goodDeal: boolean;
    isPublished: boolean;
    model: string;
    year: string;
    fuel: string;
    mileage: string;
    price: string;
    priceFipe: string;
    frontImg: string;
    description: string;
    images: IImageResponse[];
    user: IUser;
}

export interface ICarProduct {
    id: string;
    brand: string;
    color: string;
    goodDeal: boolean;
    isPublished: boolean;
    model: string;
    year: string;
    fuel: string;
    mileage: string;
    price: string;
    priceFipe: string;
    frontImg: string;
    description: string;
    images: IImageResponse[];
    user: IUserCar
}

export interface ICarsRequest {
    color: string;
    brand: string;
    model: string;
    year: string;
    fuel: string;
    mileage: string;
    images: IImageRequest[];
    price: string;
    priceFipe: string;
    frontImg: string;
    description: string;
}

export interface ICarsUpdate {
    color?: string;
    isPublished?: boolean;
    brand?: string;
    model?: string;
    year?: string;
    fuel?: string;
    mileage?: string;
    price?: string;
    priceFipe?: string;
    frontImg?: string;
    description?: string;
    images?: IImageRequest[];
}
