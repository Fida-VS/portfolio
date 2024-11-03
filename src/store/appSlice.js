import { createSlice } from "@reduxjs/toolkit";




const initialState = {
  isOpen: false,
  sliderImages: []
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
      }
    },
  });


export const { setIsOpenTrue, setIsOpenFalse, setSliderImages } = appSlice.actions; 

export default appSlice.reducer;
