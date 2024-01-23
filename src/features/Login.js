import { getCurrentUser } from "../api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "user",
  initialState: {
    user: "IBTZ",
  },
  extraReducers(builder) {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      console.log("called fetch User fx");
    //   console.log(action.payload);
      state.user = action.payload;
    });
  },
});

export const fetchUser = createAsyncThunk("user/fetchUser", getCurrentUser);
export default loginSlice.reducer;
