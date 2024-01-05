import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../api";

export const currentChemicalsSlice = createSlice({
  name: "chemicals",
  initialState: {
    chemicals: [],
    status: "idle",
    error: "",
    lastUpdated: { day: "01", month: "01", year: "1995" },
  },
  reducers: {
    updated: (state) => {
      const dateObj = new Date();
      state.lastUpdated = {
        day: dateObj.getDate(),
        month: dateObj.getMonth() + 1,
        year: dateObj.getFullYear(),
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (action.payload.message == "No data") {
          state.chemicals = [];
        } else {
          state.chemicals = action.payload;
        }
        
        // console.log(action.payload);
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { updated } = currentChemicalsSlice.actions;
export default currentChemicalsSlice.reducer;

export const fetchData = createAsyncThunk("chemicals/fetchData", getData);
