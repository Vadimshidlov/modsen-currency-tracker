import { Navigate } from "react-router-dom";
import BankCardPage from "@/pages/BankCard/index";
import HomePage from "@/pages/HomePage/index";
import NotFoundPage from "@/pages/NotFoundPage/index";
import TimelinePage from "@/pages/TimelinePage/index";
import {
    BANKCARD_PAGE_PATH,
    HOME_PAGE_PATH,
    INITIAL_PATH,
    OTHER_PATH,
    TIMELINE_PAGE_PATH,
} from "@/routes/constants";

export const routesList = [
    {
        path: INITIAL_PATH,
        element: <Navigate to={HOME_PAGE_PATH} />,
    },
    {
        path: HOME_PAGE_PATH,
        element: <HomePage />,
    },
    {
        path: TIMELINE_PAGE_PATH,
        element: <TimelinePage />,
    },
    {
        path: BANKCARD_PAGE_PATH,
        element: <BankCardPage />,
    },
    {
        path: OTHER_PATH,
        element: <NotFoundPage />,
    },
];
