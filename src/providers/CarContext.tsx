import { Dispatch, createContext, useContext, useState } from "react";
import { IUserProviderProps, useUserContext } from "./UserContext";
import api from "../service/api";
import { ICarsRequest, ICarsResponse, ICarsUpdate } from "../interfaces/car";
import { toast } from "react-toastify";

interface ICarContext {
    loadCar(): void;
    recentCar: ICarsResponse[];
    setRecentCar: Dispatch<ICarsResponse[]>;
    createCarFunc: (formData: ICarsRequest) => void;
    patchContact: (formData: ICarsUpdate) => void;
    carId: string;
    setCarId: Dispatch<string>;
}
export const CarContext = createContext<ICarContext>({} as ICarContext);

export const CarProvider = ({ children }: IUserProviderProps) => {
    const [recentCar, setRecentCar] = useState<ICarsResponse[]>([]);
    const [carId, setCarId] = useState("");
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

    const patchContact = async (formData: ICarsUpdate) => {
        try {
            const newData = Object.fromEntries(
                Object.entries(formData).filter(([_, v]) => v != "")
            );
            const { data } = await api.patch(`/contact/${carId}`, newData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setRecentCar(recentCar?.map((e) => (e.id === data.id ? data : e)));
            onClose();
            toast.success("Carro atualizado com sucesso");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <CarContext.Provider
            value={{
                loadCar,
                recentCar,
                setRecentCar,
                createCarFunc,
                patchContact,
                carId,
                setCarId,
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
