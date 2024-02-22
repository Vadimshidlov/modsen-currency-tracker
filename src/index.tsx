import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "@/components/App/App";
import { store } from "@/store";
import "regenerator-runtime/runtime";

const root = document.getElementById("root");

if (!root) {
    throw new Error("root not found");
}

const container = createRoot(root);

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Provider store={store}>
                <App />
            </Provider>
        ),
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
]);

container.render(<RouterProvider router={router} />);
