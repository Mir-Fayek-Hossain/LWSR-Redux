// // import { connect } from "react-redux";
// // import { DECREMENT, INCREMENT } from "../redux/counter/actionTypes";

// import { connect } from "react-redux";
// import { decrement, increment } from "../redux/counter/actions";


// // function Counter({ counter:any,increment,decrement }) {
// //     return (
// //         <div>
// //             <h2>{counter}</h2>
// //             <button onClick={increment}>inc</button>
// //             <button onClick={decrement}>dec</button>
// //         </div>
// //     );
// // }
// // const mapSateToProps = (state: any) => {
// //     return {
// //         counter: state.value,
// //     };
// // };
// // const mapDispatchToProps=(dispatch:any)=>{
// //     return{
// //         increment:()=>{dispatch(INCREMENT)},
// //         decrement:()=>{dispatch(DECREMENT)}
// //     }
// // }
// // export default connect(mapSateToProps, mapDispatchToProps)(Counter);



// type Props = {
//     counter:number,
//     increment:any,
//     decrement:any
// }

// const Counter = ({counter,increment,decrement}: Props) => {
//   return (
//     <div>
//                  <h2>{counter}</h2>
//                  <button onClick={increment}>inc</button>
//                  <button onClick={decrement}>dec</button>
//              </div>
//   )
// }

// const mapSateToProps = (state: any) => {
//     return {
//         counter: state.value,
//     };
// };
// const mapDispatchToProps=(dispatch:any)=>{
//     return{
//         increment:(value:any)=>{dispatch(increment(value))},
//         decrement:(value:any)=>{dispatch(decrement(value))},
//     }
// }
// export default connect(mapSateToProps, mapDispatchToProps)(Counter);
import React from 'react'

type Props = {}

function Counter({}: Props) {
  return (
    <div>Counter</div>
  )
}

export default Counter