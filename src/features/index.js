import { combineReducers } from "@reduxjs/toolkit";
import memo from "./memo/memo";

const rootReducer = combineReducers({
  memo,
});

export default rootReducer;
