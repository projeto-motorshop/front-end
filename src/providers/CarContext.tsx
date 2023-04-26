import { Dispatch, createContext, useContext, useState } from "react";
import { IUserProviderProps, useUserContext } from "./UserContext";
import api from "../service/api";
import { ICarProduct, ICarsRequest, ICarsResponse, ICarsUpdate } from "../interfaces/car";
import { toast } from "react-toastify";

interface ICarContext {
    loadCar(): void;
    recentCar: ICarsResponse[];
    setRecentCar: Dispatch<ICarsResponse[]>;
    createCarFunc: (formData: ICarsRequest) => void;
    car: ICarProduct | undefined;
    setCar: Dispatch<ICarProduct>;
}
export const CarContext = createContext<ICarContext>({} as ICarContext);

export const CarProvider = ({ children }: IUserProviderProps) => {
    const [recentCar, setRecentCar] = useState<ICarsResponse[]>([]);
    const [car, setCar] = useState<ICarProduct | undefined>();
    const { onClose } = useUserContext();

    const token = localStorage.getItem("@token");

    const loadCar = async () => {
        try {
            const { data } = await api.get("/cars");
            setRecentCar(data.allCars);
        } catch (error) {
            console.log(error);
        }
    };

    const createCarFunc = async (formData: ICarsRequest) => {
        try {
            await api.post("/cars", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success("Carro Cadastrado com Sucesso");
            onClose();
        } catch (error) {
            toast.error("ops, ocorreu um erro ;-;");
        }
    };

    return (
        <CarContext.Provider
            value={{
                loadCar,
                recentCar,
                setRecentCar,
                createCarFunc,
                car,
                setCar,
            }}
        >
            {children}
        </CarContext.Provider>
    );
};

export const useCarContext = (): ICarContext => {
    const context = useContext(CarContext);

    return context;
};
