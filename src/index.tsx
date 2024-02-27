import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "@/components/App/App";
import { store } from "@/store";
import "regenerator-runtime/runtime";

/* const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Provider store={store}>
                <App />
            </Provider>
        ),
        // element: <Navigate to="/home" />,
        children: [
            {
                path: "/about",
                element: <h1>about</h1>,
            },
            {
                path: "/shop",
                element: <h1>shop</h1>,
            },
        ],
    },
]); */

/* import { getCurrency } from "@/store/action-creators/getCurrency";

store.dispatch(getCurrency); */

const root = document.getElementById("root");

if (!root) {
    throw new Error("root not found");
}

const container = createRoot(root);

// container.render(<RouterProvider router={router} />);
container.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
);
