import { Routes, Route } from "react-router-dom";
import React from "react";
import { routesList } from "@/routes/RouterList/index";

export default function AppRoutes() {
    return (
        <Routes>
            {routesList.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
            ))}
        </Routes>
    );
}
