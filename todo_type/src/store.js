import { createStore } from "redux";
import { counterRedux } from "./reducer";
import { combineReducers } from "redux";
export const allReducers = combineReducers({
    counterRedux,
});