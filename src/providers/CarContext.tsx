import {
    Dispatch,
    ReactNode,
    createContext,
    useContext,
    useState,
} from "react";
import { IUserProviderProps, useUserContext } from "./UserContext";
import api from "../service/api";
import {
    ICarProduct,
    ICarsRequest,
    ICarsResponse,
    ICarsUpdate,
    IFilter,
} from "../interfaces/car";
import { toast } from "react-toastify";
import { useCommentContext } from "./CommentContext";

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
    deleteCar: () => void;
    priceFipe: string;
    setPriceFipe: Dispatch<string>;
    typesFuel: (elem: any) => ReactNode;
    filter: IFilter;
    setFilter: Dispatch<IFilter>;
    offSet: number;
    setOffSet: Dispatch<number>;
    currentPage: number;
    setCurrentPage: Dispatch<number>;
    totalPages: number;
    setTotalPages: Dispatch<number>;
    loadProduct: () => void;
    productId: string;
    setProductId: Dispatch<string>;
}
export const CarContext = createContext<ICarContext>({} as ICarContext);

export const CarProvider = ({ children }: IUserProviderProps) => {
    const { onClose, loadUser } = useUserContext();
    const [recentCar, setRecentCar] = useState<ICarsResponse[]>([]);
    const [priceFipe, setPriceFipe] = useState("0");
    const [car, setCar] = useState<ICarProduct | undefined>();
    const [carId, setCarId] = useState("");
    const [filteredCars, setFilteredCars] = useState<ICarsResponse[]>([]);
    const [offSet, setOffSet] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [productId, setProductId] = useState("");
    const [filter, setFilter] = useState<IFilter>({
        brand: "",
        model: "",
        color: "",
        year: "",
        fuel: "",
        minKm: "",
        maxKm: "",
        minPrice: "",
        maxPrice: "",
    });

    const token = localStorage.getItem("@token");

    const loadProduct = async () => {
        try {
            console.log(productId);
            const { data } = await api.get(`/cars/${productId}`);
            setCar(data);
        } catch (error) {
            console.log(error);
        }
    };

    const typesFuel = (elem: string | number) => {
        if (elem == 1) {
            return "Flex";
        }
        if (elem == 2) {
            return "Híbrido";
        }
        if (elem == 3) {
            return "Elétrico";
        }
    };

    const loadCar = async () => {
        try {
            const { data } = await api.get("/cars");
            setRecentCar(data);
        } catch (error) {
            console.log(error);
        }
    };

    const createCarFunc = async (formData: ICarsRequest) => {
        try {
            formData.priceFipe = priceFipe;
            await api.post("/cars", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            loadUser();
            toast.success("Carro Cadastrado com Sucesso");
            onClose();
        } catch (error) {
            toast.error("ops, ocorreu um erro ");
        }
    };

    const deleteCar = (): void => {
        try {
            api.delete(`/cars/${carId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            loadUser();
            toast.success("Anuncio deletado");
            onClose();
        } catch (error) {
            toast.error("algo deu errado");
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
                deleteCar,
                priceFipe,
                setPriceFipe,
                typesFuel,
                filter,
                setFilter,
                offSet,
                setOffSet,
                currentPage,
                setCurrentPage,
                totalPages,
                setTotalPages,
                loadProduct,
                productId,
                setProductId,
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
