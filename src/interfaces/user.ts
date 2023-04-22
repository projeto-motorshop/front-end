export interface IUser {
    id: string;
    name: string;
    password: string;
    email: string;
    phone?: string;
    imageProfile: string;
    description: string;
    cpf: string;
    salesman: boolean;
    birthdate?: Date;
}

export interface IUserResponse {
    id: string;
    name: string;
    urlImg: string | null;
    email: string;
    phone: string;
    cpf: string;
    description: string | null;
    salesman: boolean;
    birthdate: Date | null;
    createdAt: Date;
}

export interface IUserRequest {
    name: string;
    urlImg?: string | null;
    email: string;
    password: string;
    passwordConfirm: string;
    phone: string;
    cpf: string;
    description?: string | null;
    // salesman: string;
    birthdate: Date;
    city: string;
    state: string;
    cep: string;
    street: string;
    number: string;
    complement?: string | null;
}

export interface IUserUpdate {
    name?: string;
    urlImg?: string | null;
    email?: string;
    password?: string;
    phone?: string;
    cpf?: string;
    description?: string | null;
    salesman?: boolean;
    birthdate?: string;
}

export interface IAddressRequest {
    city: string;
    state: string;
    cep: string;
    street: string;
    number: string;
    complement?: string | null;
}
export interface IAddressUpdate {
    city?: string;
    state?: string;
    cep?: string;
    street?: string;
    number?: string;
    complement?: string | null;
}

export interface IAddressRsponse {
    id: string;
    city: string;
    state: string;
    cep: string;
    street: string;
    number: string;
    complement?: string | null;
}

export interface IUserLogin {
    email: string;
    password: string;
}
