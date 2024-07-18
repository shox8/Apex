import { authApi } from "@/lib/services/auth";
import { User } from "@/lib/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  user: User | null;
  isAuthenticated: boolean;
}

const initialState: InitialState = {
  user: null,
  isAuthenticated: false,
};

const ends = authApi.endpoints;

const auth = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(ends.register.matchFulfilled, (state, action) => {})
      .addMatcher(ends.current.matchFulfilled, (state, action) => {});
  },
});

export const { logout } = auth.actions;
export default auth.reducer;
