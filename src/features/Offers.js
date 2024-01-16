import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addNewOfferToCurrent, getCurrentOffers } from "../api";

const offerDataModel = [
  {
    product_description: "Mastercycler® X50 - PCR Thermocycler",
    product_code: "6303000010",
    discount: "20",
    discount_condition: "Offer valid until ",
    validity: "30 Dec 2024",
    img_link:
      "https://www.eppendorf.com/product-media/img/global/233332/Eppendorf_PCR_Mastercycler-X50s_product.jpg?imwidth=540",
    product_link:
      "https://www.eppendorf.com/za-en/eShop-Products/PCR/Thermocyclers/Mastercycler-X50-p-PF-217186",
  },
];

export const offersSlice = createSlice({
  name: "offers",
  initialState: {
    currentOffers: offerDataModel,
    status: "",
  },
  reducers: {
    getOffers(state) {
      state.currentOffers = state.currentOffers;
    },
    addNewOffer(state, action) {
      state.currentOffers = [...state.currentOffers, action.payload];
      // console.log(state.currentOffers);
    },
    updateExistingOffer(state, action) {
      const tempOffer = state.currentOffers.find(
        (offer) => offer.product_code === action.payload.product_code
      );

      // console.log(action.payload)

      if (!tempOffer) {
        console.log("product does not exist");
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.status = "success";
        state.currentOffers = action.payload;
      })
      .addCase(addNewOfferToDb.fulfilled, (state, action) => {
        state.status = action.payload;
      })
  },
});

export const fetchOffers = createAsyncThunk(
  "offers/fetchOffers",
  getCurrentOffers
);

export const addNewOfferToDb = createAsyncThunk(
  "offers/addNewOffer",
  addNewOfferToCurrent
);

export const { getOffers, addNewOffer, updateExistingOffer } =
  offersSlice.actions;
export default offersSlice.reducer;
