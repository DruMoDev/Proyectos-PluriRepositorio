import { configureStore } from "@reduxjs/toolkit";
import { quizzReducer } from "./slices/quizzSlice";

const store = configureStore({
  reducer: {
    quizz: quizzReducer,
  },
});

export default store;
