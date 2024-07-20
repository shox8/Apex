import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import auth from "./features/auth/authSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { [api.reducerPath]: api.reducer, auth },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["getState"];
