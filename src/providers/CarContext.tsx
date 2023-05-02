import { Dispatch, createContext, useContext, useState } from "react";
import { IUserProviderProps, useUserContext } from "./UserContext";
import api from "../service/api";
import {
    ICarProduct,
    ICarsRequest,
    ICarsResponse,
    ICarsUpdate,
} from "../interfaces/car";
import { toast } from "react-toastify";

interface ICarContext {
    loadCar(): void;
    recentCar: ICarsResponse[];
    setRecentCar: Dispatch<ICarsResponse[]>;
    createCarFunc: (formData: ICarsRequest) => void;
    car: ICarProduct | undefined;
    setCar: Dispatch<ICarProduct>;
    carId: string;
    setCarId: Dispatch<string>;
    filteredCars: ICarsResponse[];
    setFilteredCars: Dispatch<ICarsResponse[]>;
}
export const CarContext = createContext<ICarContext>({} as ICarContext);

export const CarProvider = ({ children }: IUserProviderProps) => {
    const [recentCar, setRecentCar] = useState<ICarsResponse[]>([]);
    const [car, setCar] = useState<ICarProduct | undefined>();
    const [carId, setCarId] = useState("");
    const [filteredCars, setFilteredCars] = useState<ICarsResponse[]>([]);
    const { onClose, loadUser } = useUserContext();

    const token = localStorage.getItem("@token");

    const loadCar = async () => {
        try {
            const { data } = await api.get("/cars");
            console.log(data);

            setRecentCar(data);
            setFilteredCars(data);
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
            loadUser();
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
                carId,
                setCarId,
                filteredCars,
                setFilteredCars,
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
