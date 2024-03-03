import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "@/components/pages/HomePage/HomePage";
import TimelinePage from "@/components/pages/TimelinePage/TimelinePage";
import BankCardPage from "@/components/pages/BankCard/BankCardPage";
import NotFoundPage from "@/components/pages/NotFoundPage/NotFoundPage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home/*" element={<HomePage />} />
            <Route path="/timeline/*" element={<TimelinePage />} />
            <Route path="/bank-card/*" element={<BankCardPage />} />
            <Route path="/*" element={<NotFoundPage />} />
        </Routes>
    );
}
