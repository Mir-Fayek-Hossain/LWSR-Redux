import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducers";
import dynamicCounterReducers from "./dCounter/dynamicCounterReducers";


const rootReducer =combineReducers({
    dynamicCounter:dynamicCounterReducers,
    counter:counterReducer,
})
export default rootReducer
