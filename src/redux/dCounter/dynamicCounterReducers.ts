import { DDECREMENT, DINCREMENT } from "./actionTypes";

const initialState = {
    value: 20,
};
interface IAction {
    type: string;
    payload:number
}
const dynamicCounterReducers = (state = initialState, action: IAction) => {
    console.log("asd");
    
    switch (action.type) {
        case DINCREMENT:
            return {
                ...state,
                value: state.value + action.payload,
            };
        case DDECREMENT:
            return {
                ...state,
                value: state.value - action.payload,
            };
        default:
            return state;
    }
};

export default dynamicCounterReducers;