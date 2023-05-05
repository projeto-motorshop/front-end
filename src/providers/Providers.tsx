import { CarProvider } from "./CarContext";
import { CommentProvider } from "./CommentContext";
import { IUserProviderProps, UserContextProvider } from "./UserContext";

function Providers({ children }: IUserProviderProps) {
    return (
        <UserContextProvider>
            <CarProvider>
                <CommentProvider>{children}</CommentProvider>
            </CarProvider>
        </UserContextProvider>
    );
}

export default Providers;
