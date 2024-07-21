import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import auth from "./features/auth/authSlice";

export const store = configureStore({
  reducer: { [api.reducerPath]: api.reducer, auth },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
