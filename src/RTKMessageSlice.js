import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 //colors generated
  value: [],
};

//A function to generate random RGB values
const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

//State slice
export const messagesSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setMessages: (state, action) => {
      //state.value = [...state.value, randomRgb()];
      state.value = [...state.value, action.payload];
    },
  },
});

// Action creators are automatically generated for each case reducer function 
export const { setMessages } = messagesSlice.actions;

export default messagesSlice.reducer;