import { configureStore } from "@reduxjs/toolkit";
import currentChemicalsReducer from "./features/CurrentChemicalsSlice";
import toggleUploadReducer from "./features/UploadSlice";

export default configureStore({
  reducer: {
    chemicals: currentChemicalsReducer,
    upload: toggleUploadReducer,
  },
});
