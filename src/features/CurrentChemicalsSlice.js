import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCurrentStockLogs, getData } from "../api";

export const currentChemicalsSlice = createSlice({
  name: "chemicals",
  initialState: {
    chemicals: [],
    status: "idle",
    error: "",
    lastUpdated: [],
  },
  reducers: {},
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
      })
      .addCase(fetchCurrentStockLogs.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.lastUpdated = [...action.payload]
      })
  },
});

// export const { updated } = currentChemicalsSlice.actions;
export default currentChemicalsSlice.reducer;

export const fetchData = createAsyncThunk("chemicals/fetchData", getData);
export const fetchCurrentStockLogs = createAsyncThunk("chemicals/fetchCurrentStockLogs", getCurrentStockLogs);
