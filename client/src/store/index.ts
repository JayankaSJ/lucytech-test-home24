import {
    AnyAction,
    Dispatch,
    Middleware,
    PreloadedState,
    ThunkDispatch,
    configureStore,
} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import logger from "redux-logger";

import rootReducer from "../reducers";
import { isDevelopment } from "../config";

export const useAppDispatch = () => useDispatch<AppDispatch>();

const middleware = (
    getDefaultMiddleware: (arg: {
        thunk: boolean;
        serializableCheck: boolean;
    }) => Middleware[]
) => {
    const defaultMiddleWares = getDefaultMiddleware({
        thunk: true,
        serializableCheck: false,
    });
    if (isDevelopment) {
        defaultMiddleWares.concat(logger);
    }
    return defaultMiddleWares;
};

export const configureAppStore = (
    preloadedState?: PreloadedState<RootState>
) => {
    return configureStore({
        reducer: rootReducer,
        middleware,
        devTools: isDevelopment,
        preloadedState,
    });
};

const store = configureAppStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof configureAppStore>;
export type AppDispatch = Dispatch<AnyAction> & AppThunkDispatch;
export type AppThunkDispatch = ThunkDispatch<RootState, unknown, AnyAction>;

export default store;
