import { User } from "../types";
import { api } from "../api";

export type UserData = Omit<User, "id" | "photo" | "username">;

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<User, UserData>({
      query: (userData) => ({
        url: "/auth/sign-up",
        method: "POST",
        body: userData,
      }),
    }),
    logIn: builder.mutation<User, UserData>({
      query: (userData) => ({
        url: "/auth/log-in",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useSignUpMutation, useLogInMutation } = authApi;
export const { signUp, logIn } = authApi.endpoints;
