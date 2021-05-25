import { combineReducers } from "redux";
import { foodReducer, customerReducer } from "./Reducer";

export const reducers = combineReducers({
  foodReducer,
  customerReducer,
});
