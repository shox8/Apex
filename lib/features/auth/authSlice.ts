import { logIn, signUp } from "@/lib/services/auth";
import { User } from "@/lib/types";
import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

interface InitialState {
  user: User | null;
}

const initialState: InitialState = {
  user: null,
};

const auth = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(signUp.matchFulfilled, (state, action) => {
        state.user = action.payload;
        message.success("Signed Up");
      })
      .addMatcher(logIn.matchFulfilled, (state, action) => {
        state.user = action.payload;
        message.success("Logged In");
      });
  },
});

export const { logout } = auth.actions;
export default auth.reducer;
