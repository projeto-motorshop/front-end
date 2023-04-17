import { createContext, Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactNode } from "react";
import { useContext } from "react";
import { IUser } from "../interfaces/user";
import { useMediaQuery } from "@chakra-ui/react";
// import "react-toastify/dist/ReactToastify.css";
// import { toast } from "react-toastify";
// import api from "../services/api";

export interface IUserProviderProps {
    children: ReactNode;
}

interface IUserContext {
    user: IUser | null;
    setUser: Dispatch<SetStateAction<IUser | null>>;
    isMobile: boolean;
    isFullHd: boolean;
}

export const AuthContext = createContext<IUserContext>({} as IUserContext);

export const UserContextProvider = ({ children }: IUserProviderProps) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [isMobile, isFullHd] = useMediaQuery([
        "(min-width: 770px)",
        "(min-width: 2000px)",
    ]);

    const navigate = useNavigate();

    // const loginFunction = (formLogin: IUserLogin) => {
    //     api.post("/auth", formLogin)
    //         .then((resp) => {
    //             setToken(resp.data.token);
    //             api.get("/users/profile", {
    //                 headers: {
    //                     Authorization: `Bearer ${resp.data.token}`,
    //                 },
    //             }).then((resp) => {
    //                 setUser(resp.data);
    //                 navigate("/home", { replace: true });
    //                 toast.success(`bem vindo ${resp.data.name}`);
    //             });
    //         })
    //         .catch((err) => toast.error("email ou senha inválido"));
    // };

    // const patchUser = async (formData: IUser) => {
    //     try {
    //         const newData = Object.fromEntries(
    //             Object.entries(formData).filter(([_, v]) => v != "")
    //         );
    //         const { data } = await api.patch("/users/profile", newData, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         });
    //         setUser(data);
    //         toast.success("usuario atualizado com sucesso");
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // const deleteUser = (): void => {
    //     try {
    //         api.delete(`/users/profile`, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         });
    //         toast.success("Contato excluido com sucesso");
    //         setToken("");
    //         setUser(null);
    //         navigate("/", { replace: true });
    //     } catch (error) {
    //         toast.error("algo deu errado");
    //     }
    // };

    // const registerSubmit = (formRegister: IUserRegister) => {
    //     try {
    //         const newData = Object.fromEntries(
    //             Object.entries(formRegister).filter(([_, v]) => v != "")
    //         );
    //         api.post("/users", newData);
    //         toast.success("conta criada com sucesso!");
    //     } catch (error) {
    //         toast.error(`ops, algo de errado`);
    //     }
    // };

    // const logout = async (): Promise<void> => {
    //     setToken("");
    //     setUser(null);
    //     navigate("/");
    // };

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                isMobile,
                isFullHd,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useUserContext = (): IUserContext => {
    const context = useContext(AuthContext);

    return context;
};
