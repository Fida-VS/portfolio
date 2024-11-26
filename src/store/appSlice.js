import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  technology: null,
  sliderImages: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsOpenTrue(state) {
      state.isOpen = true;
    },
    setIsOpenFalse(state) {
      state.isOpen = false;
    },
    setSliderImages(state, action) {
      state.sliderImages = action.payload;
    },
    setTechnology(state, action) {
      state.technology = action.payload;
    },
  },
});

export const { setIsOpenTrue, setIsOpenFalse, setSliderImages, setTechnology } =
  appSlice.actions;

export default appSlice.reducer;
