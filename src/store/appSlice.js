import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  mobileProjectInfos: [
    { id: 'mazeInfo', isVisible: false },
    { id: 'tableInfo', isVisible: false },
    { id: 'reposInfo', isVisible: false },
    { id: 'todoInfo', isVisible: false },
  ],
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
    },
    toggleMobileProjectInfo(state, action) {
      const id = action.payload;
      const index = state.mobileProjectInfos.findIndex(info => info.id === id);
      if (index >= 0) {
        state.mobileProjectInfos[index].isVisible = !state.mobileProjectInfos[index].isVisible;
      }
    }
  },
});

export const { setIsOpenTrue, setIsOpenFalse, setSliderImages, setTechnology, setSliderWidth, toggleMobileProjectInfo } =
  appSlice.actions;

export default appSlice.reducer;
