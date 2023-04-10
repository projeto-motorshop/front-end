import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GlobalStyle } from "./global";
// import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            {/* <ChakraProvider> */}
            <GlobalStyle />
            <App />
            {/* </ChakraProvider> */}
        </BrowserRouter>
    </React.StrictMode>
);
