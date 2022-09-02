import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import memos from "../modules/memos";
import users from "../modules/users";

export const store = configureStore({
  reducer: {
    memos,
    users
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
