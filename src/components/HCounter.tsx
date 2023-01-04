import { useDispatch, useSelector } from "react-redux";
import { increment,decrement } from "../redux/counter/actions";


type ICounter = {
    counter:{
        value: number;
    }
};

function HCounter() {
    const count = useSelector((state: ICounter) => state.counter.value);
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch(increment());
    };
    const decrementHandler = () => {
        dispatch(decrement());
    };
    return (
        <div>
            {count}
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={ decrementHandler}>Decrement</button>
        </div>
    );
}

export default HCounter;
