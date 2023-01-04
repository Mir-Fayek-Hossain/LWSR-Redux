// import { connect } from "react-redux";
// import { DECREMENT, INCREMENT } from "../redux/counter/actionTypes";

import { connect } from "react-redux";
import { decrement, increment } from "../redux/counter/actions";
import { decrement as dDecrement ,increment as dIncrement } from "../redux/dCounter/actions";


// function Counter({ counter:any,increment,decrement }) {
//     return (
//         <div>
//             <h2>{counter}</h2>
//             <button onClick={increment}>inc</button>
//             <button onClick={decrement}>dec</button>
//         </div>
//     );
// }
// const mapSateToProps = (state: any) => {
//     return {
//         counter: state.value,
//     };
// };
// const mapDispatchToProps=(dispatch:any)=>{
//     return{
//         increment:()=>{dispatch(INCREMENT)},
//         decrement:()=>{dispatch(DECREMENT)}
//     }
// }
// export default connect(mapSateToProps, mapDispatchToProps)(Counter);



type Props = {
    counter:number,
    increment:any,
    decrement:any
    dynamic:boolean
}

const Counter = ({counter,increment,decrement,dynamic}: Props) => {
  return (
    <div>
                 <h2>{counter}</h2>
                 <button onClick={increment}>inc</button>
                 <button onClick={decrement}>dec</button>
             </div>
  )
}

const mapSateToProps = (state: any,ownProps:any) => {
    return {
        counter:ownProps.dynamic?state.dynamicCounter.value: state.counter.value,
    };
};
const mapDispatchToProps=(dispatch:any,ownProps:any)=>{
    return{
        increment:(value:any)=>{ownProps.dynamic?dispatch(dIncrement(2)): dispatch(increment())},
        decrement:(value:any)=>{ownProps.dynamic?dispatch(dDecrement(5)): dispatch(decrement())},
    }
}
export default connect(mapSateToProps, mapDispatchToProps)(Counter);
