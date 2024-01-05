import { createSlice } from "@reduxjs/toolkit";

export const toggleUploadSlice = createSlice({
  name: "upload",
  initialState: {
    upload: true,
  },
  reducers: {
    toggleOnOff(state, action) {
      state.upload = action.payload;
    },
  },
});

export const { toggleOnOff } = toggleUploadSlice.actions;
export default toggleUploadSlice.reducer;
