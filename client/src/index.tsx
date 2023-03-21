import React, { StrictMode } from "react";
import { createRoot, Root } from "react-dom/client";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import store from "./store";
import App from "./App";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
`;

const rootElement = document.getElementById("root") as Element;
const root = createRoot(rootElement) as Root;

root.render(
    <StrictMode>
        <GlobalStyle />
        <ChakraProvider>
            <Provider store={store}>
                <ColorModeScript
                    initialColorMode={theme.config.initialColorMode}
                />
                <App />
            </Provider>
        </ChakraProvider>
    </StrictMode>
);
