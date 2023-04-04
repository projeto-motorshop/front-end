import Router from "./router";
import { Container } from "./style";
import { ToastContainer } from "react-toastify";

function App() {
    return (
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
    );
}

export default App;
