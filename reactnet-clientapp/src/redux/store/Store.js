import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from "../reducer/index";

export const MyStore = createStore(reducers, compose(applyMiddleware(thunk)));
