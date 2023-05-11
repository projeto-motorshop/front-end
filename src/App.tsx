import Providers from "./providers/Providers";
import Router from "./router";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <Providers>
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
        </Providers>
    );
}

export default App;
