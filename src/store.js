import { configureStore } from "@reduxjs/toolkit";
import currentChemicalsReducer from "./features/CurrentChemicalsSlice";
import toggleUploadReducer from "./features/UploadSlice";
import currentOffers from "./features/Offers";

export default configureStore({
  reducer: {
    chemicals: currentChemicalsReducer,
    upload: toggleUploadReducer,
    offers: currentOffers,
  },
});
