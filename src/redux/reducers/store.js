import { applyMiddleware, createStore } from "redux";
import listReducer from "./listReducer";
import { thunk } from "redux-thunk";

const store = createStore(listReducer, applyMiddleware(thunk));

export default store;
