import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

const loginData = {
  email: "",
  password: "",
};

const loginCredentials = {
  email: "",
  password: "",
};

const getLoginCredentials = createAsyncThunk(
  "login/getLoginCredentials",
  async () => {
    try {
      const response = await fetch(
        "https://gist.githubusercontent.com/abhiram-gopalakrishnan/f8a72dbf5c6ee3c67ab0a23ca00821fd/raw/3ff9db90cb8ae504d24e20dac04509855ab58ce9/login.json"
      );
      const formattedResponse = await response.json();
      return formattedResponse;
    } catch (error) {
      console.log("Error");
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    loginData,
    loginCredentials,
    loading: false,
    isSuccess: false,
  },
  reducers: {
    handleLoginData: (
      state,
      action: PayloadAction<[name: string, value: string]>
    ) => {
      //   console.log("action payload",action.payload);
      const [name, value] = action.payload;
      //   console.log("logindata",name," ",value);
      state.loginData = { ...state.loginData, [name]: value };
      //   console.log("state", state.loginData);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLoginCredentials.pending, (state) => {
      // console.log("pending")
      state.loading = true;
    });
    builder.addCase(
      getLoginCredentials.fulfilled,
      (state, action: PayloadAction<{ email: string; password: string }>) => {
        state.loading = false;
        // console.log("fulfilled",action.payload);
        state.loginCredentials = action.payload;
        state.isSuccess = true;
      }
    );
    builder.addCase(getLoginCredentials.rejected, (state) => {
      state.loading = false;
      state.isSuccess = false;
    });
  },
});

export const { handleLoginData } = loginSlice.actions;
export default loginSlice;
export { getLoginCredentials };
