import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import ApplicationRoutes from "./routes";

type AppProps = object;

const App: FC<AppProps> = () => {
    return (
        <BrowserRouter>
            <ApplicationRoutes />
        </BrowserRouter>
    );
};

export default App;
