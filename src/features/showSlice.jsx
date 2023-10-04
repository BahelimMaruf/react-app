import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 'what is your Name', value1: 0 };

export const showSlice = createSlice({
  name: "showData",
  initialState,
  reducers: {
    showData: (state) => {
      state.value = state.value +1;
    },
    increment: (state) => {
      state.value1 = state.value1 + 1;
    },

    increaseValue: (state, action) => {
      state.value =  action.payload;
    },
  },
});

export const { showData, increment, increaseValue } = showSlice.actions;
export default showSlice.reducer;
