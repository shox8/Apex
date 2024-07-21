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
    signUpWithGoogle: builder.mutation<UserData, void>({
      query: () => ({
        url: "/auth/sign-up-with-google",
        method: "POST",
      }),
    }),
  }),
});

export const { useSignUpMutation, useLogInMutation, useSignUpWithGoogleMutation } =
  authApi;
export const { signUp, logIn, signUpWithGoogle } = authApi.endpoints;
