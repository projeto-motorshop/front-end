import {
    useDisclosure,
    useMediaQuery
} from "@chakra-ui/react";
import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EditUserModal } from "../components/RenderModalContent/ModalEditUser";
import {
    IAddressUpdate,
    IPasswordRecovery,
    IUser,
    IUserLogin,
    IUserRequest,
    IUserUpdate
} from "../interfaces/user";
import api from "../service/api";
//  import { toast } from "react-toastify";
// import api from "../services/api";

export interface IUserProviderProps {
    children: ReactNode;
}

interface IUserContext {
    user: IUser | null;
    setUser: Dispatch<SetStateAction<IUser | null>>;
    isMobile: boolean;
    isNotebook: boolean;
    isFullHd: boolean;
    registerSubmit: (formRegister: IUserRequest) => void;
    loginFunction: (formLogin: IUserLogin) => void;
    logout: () => Promise<void>;
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    overlay: React.ReactNode;
    setOverlay: (overlay: React.ReactNode) => void;
    patchUser: (formData: IUserUpdate) => void;
    patchUserAddress: (formData: IAddressUpdate) => void;
    token: string;
    autoLogin: () => void;
    passwordRecoveryFunction: (email: IPasswordRecovery) => void;
    deleteUser: () => void;
    resetPasswordFunction: (password: string, resetToken: string) => void;
}

export const AuthContext = createContext<IUserContext>({} as IUserContext);

export const UserContextProvider = ({ children }: IUserProviderProps) => {
    const [token, setToken] = useState("");
    const [user, setUser] = useState<IUser | null>(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [overlay, setOverlay] = useState<React.ReactNode>(<EditUserModal />);
    const [isMobile, isNotebook, isFullHd] = useMediaQuery([
        "(min-width: 770px)",
        "(min-width: 1439px)",
        "(min-width: 2000px)",
    ]);

    const navigate = useNavigate();

    useEffect(() => {
        autoLogin();
    }, []);

    const loginFunction = (formLogin: IUserLogin) => {
        api.post("/login", formLogin)
            .then((resp) => {
                localStorage.setItem("@token", resp.data.tokenUser);
                setToken(resp.data.tokenUser);
                api.get(`/users/profile`, {
                    headers: {
                        Authorization: `Bearer ${resp.data.tokenUser}`,
                    },
                }).then((resp) => {
                    setUser(resp.data);
                    navigate("/home", { replace: true });
                    toast.success(`bem vindo ${resp.data.name}`);
                });
            })
            .catch((err) => toast.error("email ou senha inválido"));
    };

    const autoLogin = () => {
        const token = localStorage.getItem("@token");

        if (token) {
            api.get(`/users/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((res) => {
                    setUser(res.data);
                })
                .catch((err: Error) => {
                    console.log(err);
                    localStorage.clear();
                });
        }
    };

    const patchUser = async (formData: IUserUpdate) => {
        try {
            const newData = Object.fromEntries(
                Object.entries(formData).filter(([_, v]) => v != "")
            );
            const { data } = await api.patch(`/users/${user?.id}`, newData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUser(data);
            toast.success("usuario atualizado com sucesso");
        } catch (error) {
            console.log(error);
        }
    };

    const patchUserAddress = async (formData: IAddressUpdate) => {
        try {
            const newData = Object.fromEntries(
                Object.entries(formData).filter(([_, v]) => v != "")
            );
            const { data } = await api.patch(
                `/users/adress/${user?.id}`,
                newData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setUser(data);
            toast.success("endereço atualizado com sucesso");
        } catch (error) {
            console.log(error);
        }
    };

    const deleteUser = (): void => {
        try {
            api.delete(`/users/${user?.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success("Conta deletada");
            setToken("");
            localStorage.clear();
            setUser(null);
            navigate("/home");
        } catch (error) {
            toast.error("algo deu errado");
        }
    };

    const registerSubmit = async (formRegister: IUserRequest) => {
        try {
            await api.post("/users", formRegister);
            toast.success("conta criada com sucesso!");
            navigate("/", { replace: true });
        } catch (error) {
            toast.error(`ops, algo de errado`);
        }
    };

    const passwordRecoveryFunction = async (email: IPasswordRecovery) => {
        try {
            await api.post("/users/sendEmailPasswordRecovery", email);
            toast.success("E-mail para recuperação de senha enviado!");
        } catch (error) {
            console.log(error);
            toast.error("Erro ao enviar E-mail");
        }
    };

    const resetPasswordFunction = async (
        password: string,
        resetToken: string
    ) => {
        try {
            await api.patch(`/users/resetPassword/${resetToken}`, password);
            toast.success("Senha alterada com sucesso!");
        } catch (error) {
            console.log(error);
            toast.error("Erro ao alterar senha!");
        }
    };

    const logout = async (): Promise<void> => {
        setToken("");
        localStorage.clear();
        setUser(null);
        navigate("/");
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                isMobile,
                isNotebook,
                isFullHd,
                registerSubmit,
                loginFunction,
                logout,
                isOpen,
                onOpen,
                onClose,
                overlay,
                setOverlay,
                patchUser,
                patchUserAddress,
                token,
                autoLogin,
                passwordRecoveryFunction,
                deleteUser,
                resetPasswordFunction,
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
