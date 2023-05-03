import Providers from "./providers/Providers";
import Router from "./router";
import { Container } from "./style/app";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <Providers>
            {/* <Container> */}
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
            {/* </Container> */}
        </Providers>
    );
}

export default App;
