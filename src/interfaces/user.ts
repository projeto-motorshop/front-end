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
    birthdate?: string;
}
