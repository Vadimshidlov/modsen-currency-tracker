import React, { useState } from "react";
import "App.scss";
import { Outlet } from "react-router-dom";
// import firstImage from '@/assets/1.png';
// import secondImage from '@/assets/2.jpg';
// import Go from '@/assets/1707763560torch.svg';

export default function App() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter((prev) => prev + 1);
    };

    return (
        <div>
            {/* <div>
        <img src={firstImage} alt="" />
      </div>
      <div>
        <img src={secondImage} alt="" />
      </div>
      <div>
        <Go />
      </div> */}
            <h1>Hello world!</h1>
            <div>{counter}</div>
            <button onClick={increment}>Increment</button>
            <Outlet />
        </div>
    );
}
