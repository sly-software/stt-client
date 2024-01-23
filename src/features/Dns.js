import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUploadedDns } from "../api";

export const dnsSlice = createSlice({
  name: "deliveries",
  initialState: {
    dns: [],
    status: "",
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchDns.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchDns.fulfilled, (state, action) => {
        state.dns = action.payload
      })
      .addCase(fetchDns.rejected, (state, action) => {
        state.dns = [...state.dns];
        state.status = "fail";
      })
  },
});

/**************************************************************** */
/**************************************************************** */
/**************************************************************** */
/**************************   THUNKS  *************************** */
/**************************************************************** */
export const fetchDns = createAsyncThunk(
  "deliveries/fetchDns",
  getUploadedDns /** Function from API */
);
// export const uploadNewDNRecord = createAsyncThunk(
//   "deliveries/uploadNewDNRecord",
//   uploadDN
// );
export default dnsSlice.reducer;
