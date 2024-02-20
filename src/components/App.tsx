import { useState } from "react";
import "@/components/App.scss";
import { Outlet } from "react-router-dom";

export default function App() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter((prev) => prev + 1);
    };

    return (
        <div>
            <h1>Hello world!</h1>
            <div>{counter}</div>
            <button onClick={increment}>Increment</button>
            <Outlet />
        </div>
    );
}
