import { Provider } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import DCounter from "./components/DCounter";
import HCounter from "./components/HCounter";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
        <div className="App">
            <Counter dynamic={false}/>
            <Counter dynamic/>
            <HCounter />
            <DCounter />
        </div>
        </Provider>
    );
}

export default App;
