import { User } from "../types";
import { api } from "../api";

export type UserData = Omit<User, "id">;
type ResponseLoginData = User & { token: string };

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<ResponseLoginData, UserData>({
      query: (userData) => ({
        url: "/sign-up",
        method: "POST",
        body: userData,
      }),
    }),
    current: builder.query<ResponseLoginData, void>({
      query: (userData) => ({
        url: "/user/current",
        method: "GET",
      }),
    }),
  }),
});

export const { useRegisterMutation, useCurrentQuery } = authApi;
export const { register, current } = authApi.endpoints;
