import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GlobalStyle } from "./style/global";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./style/style";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <ChakraProvider theme={theme}>
                <GlobalStyle />
                <App />
            </ChakraProvider>
        </BrowserRouter>
    </React.StrictMode>
);
