import { createStore, compose } from "redux";
import { rootReducer } from "./reducer";

const initialState = {
    min: 0,
    sec: 0,
    ms: 0,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialState, composeEnhancers());

export { store };