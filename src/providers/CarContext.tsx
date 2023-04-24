import { Dispatch, createContext, useContext, useState } from "react";
import { IUserProviderProps, useUserContext } from "./UserContext";
import api from "../service/api";

interface ICarContext {
    loadCar(): void;
    recentCar: any;
    setRecentCar: Dispatch<[]>;
}
export const CarContext = createContext<ICarContext>({} as ICarContext);

export const CarProvider = ({ children }: IUserProviderProps) => {
    const [recentCar, setRecentCar] = useState([]);
    const { token } = useUserContext();

    const loadCar = async () => {
        try {
            const { data } = await api.get("/cars");
            setRecentCar(data.allCars);
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
