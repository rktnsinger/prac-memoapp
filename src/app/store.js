import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import memoReducer from "../features/memo/memo";
import userReducer from "../features/user/user";
// import rootReducer from "../features";

export const store = configureStore({
  reducer: {
    memo: memoReducer,
    user: userReducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
