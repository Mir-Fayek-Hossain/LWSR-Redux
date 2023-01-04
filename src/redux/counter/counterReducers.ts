import { DECREMENT, INCREMENT } from "./actionTypes";

const initialState = {
    value: 40,
};
interface IAction {
    type: string;
}
const counterReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + 1,
            };
        case DECREMENT:
            return {
                ...state,
                value: state.value - 1,
            };
        default:
            return state;
    }
};

export default counterReducer;