import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

// Define a type for the slice state
interface AuthTypeState {
  value: string;
}

// Define the initial state using that type
const initialState: AuthTypeState = {
  value: "signin",
};

export const authTypeSlice = createSlice({
  name: "authType",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    signin: (state) => {
      state.value = "signin";
    },
    signup: (state) => {
      state.value = "signup";
    },
  },
});

export const { signin, signup } = authTypeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectType = (state: RootState) => state.authType.value;

export default authTypeSlice.reducer;
