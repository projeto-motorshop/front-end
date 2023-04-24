import { CarProvider } from "./CarContext";
import { IUserProviderProps, UserContextProvider } from "./UserContext";

function Providers({ children }: IUserProviderProps) {
    return (
        <UserContextProvider>
            <CarProvider>{children}</CarProvider>
        </UserContextProvider>
    );
}

export default Providers;
