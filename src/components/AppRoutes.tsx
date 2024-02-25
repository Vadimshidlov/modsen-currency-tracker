import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "@/components/pages/HomePage/HomePage";
import TimelinePage from "@/components/pages/TimelinePage/TimelinePage";

export default function AppRoutes() {
    return (
        <Routes>
            {/* <Route path="/" element={<Navigate to="/home">} /> */}
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home/*" element={<HomePage />} />
            <Route path="/timeline/*" element={<TimelinePage />} />
        </Routes>
    );
}
