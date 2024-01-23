import { configureStore } from "@reduxjs/toolkit";
import currentChemicalsReducer from "./features/CurrentChemicalsSlice";
import toggleUploadReducer from "./features/UploadSlice";
import currentOffers from "./features/Offers";
import dns from "./features/Dns";
import user from "./features/Login";

export default configureStore({
  reducer: {
    chemicals: currentChemicalsReducer,
    upload: toggleUploadReducer,
    offers: currentOffers,
    dns: dns,
    user: user,
  },
});
