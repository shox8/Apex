import { User } from "../types";
import { api } from "../api";

export type UserData = Omit<User, "id">;
type ResponseLoginData = User;

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<ResponseLoginData, UserData>({
      query: (userData) => ({
        url: "/auth/sign-up",
        method: "POST",
        body: userData,
      }),
    }),
    current: builder.query<ResponseLoginData, void>({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useSignUpMutation, useCurrentQuery } = authApi;
export const { signUp, current } = authApi.endpoints;
