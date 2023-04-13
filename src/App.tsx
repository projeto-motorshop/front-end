import { UserContextProvider } from "./providers/UserContext";
import Router from "./router";
import { Container } from "./style/app";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <UserContextProvider>
            <Container>
                <ToastContainer
                    position="bottom-right"
                    autoClose={1500}
                    hideProgressBar={false}
                    closeOnClick={true}
                    pauseOnHover={true}
                    draggable={true}
                    toastStyle={{ backgroundColor: "black", color: "white" }}
                />
                <Router />
            </Container>
        </UserContextProvider>
    );
}

export default App;
