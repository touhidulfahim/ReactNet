import { combineReducers } from "redux";
import { foodReducer } from "./reducer";
import { app } from "./dCandidate";

export const reducers = combineReducers({
  app,
  foodReducer,
});
