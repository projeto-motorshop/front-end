import { IComment, ICommentRequest } from "./comment";
import { IUser, IUserCar } from "./user";

export interface IImageRequest {
    urlImg: string | null | undefined;
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
    mileage: number;
    price: number;
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
    mileage: number;
    price: number;
    priceFipe: string;
    frontImg: string;
    description: string;
    images: IImageResponse[];
    user: IUserCar;
    comments: IComment[];
}

export interface ICarsRequest {
    color: string;
    brand: string;
    model: string;
    year: string;
    fuel: string;
    mileage: number;
    images: IImageRequest[];
    price: number;
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
export interface IFilter {
    brand: string;
    model: string;
    color: string;
    year: string;
    fuel: string;
    minKm: string;
    maxKm: string;
    minPrice: string;
    maxPrice: string;
}
