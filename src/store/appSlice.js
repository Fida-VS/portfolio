import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  technology: null,
  sliderImages: [],
  sliderWidth: 560,
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
    setSliderWidth(state, action) {
      state.sliderWidth = action.payload;
    }
  },
});

export const { setIsOpenTrue, setIsOpenFalse, setSliderImages, setTechnology, setSliderWidth } =
  appSlice.actions;

export default appSlice.reducer;
