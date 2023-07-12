import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
      // localStorage.setItem("isLoggedIn", true);
    },
    logout: (state) => {
      state.isLoggedIn = false;
      // localStorage.setItem("isLoggedIn", false);
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice;
