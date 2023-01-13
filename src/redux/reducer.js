import { combineReducers } from "redux";
import { ON_START, ON_STOP } from "./action";

const initialState = {
    min: 0,
    sec: 0,
    ms: 0,
};

const watcherReducers = (state = initialState, action) => {
    switch (action.type) {
        case ON_START:
            return {
                min: action.payload.min++,
                sec: action.payload.sec++,
                ms: action.payload.ms++,
            };
        case ON_STOP:
            return {
                ...initialState,
            };
        default:
            return {
                ...initialState,
            };
    }
};

const rootReducer = combineReducers({
    watcherReducers,
});

export { rootReducer };