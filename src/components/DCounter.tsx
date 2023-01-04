import { useDispatch, useSelector } from "react-redux";
import { increment,decrement } from "../redux/dCounter/actions";

type ICounter = {
    dynamicCounter:{
        value: number;
    }
};

function DCounter() {
    const count = useSelector((state: ICounter) => state.dynamicCounter.value);
    const dispatch = useDispatch();

    const incrementHandler = (value: number) => {
        dispatch(increment(value));
    };
    const decrementHandler = (value: number) => {
        dispatch(decrement(value));
    };
    return (
        <div>
            {count}
            <button onClick={() => incrementHandler(5)}>Increment</button>
            <button onClick={() => decrementHandler(5)}>Decrement</button>
        </div>
    );
}

export default DCounter;
