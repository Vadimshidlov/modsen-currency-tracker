import React from "react";
import "@/components/pages/NotFoundPage/NotFound/NotFound.scss";
import { useNavigate } from "react-router-dom";
import NotFoundIcon from "@/components/pages/NotFoundPage/NotFound/NotFoundIcon";
import Text from "@/components/pages/HomePage/Text/Text";
import { useTypedSelectorHook } from "@/store/hooks/useTypedSelector";

export default function PageNotFound() {
    const paragraf = `The page you're looking for isn't available.Try to search again or use the go back button below.`;
    const navigate = useNavigate();
    const { theme } = useTypedSelectorHook((state) => state.theme);

    return (
        <div>
            <div
                className={
                    theme === "Light" ? "not-found__container light" : "not-found__container"
                }
            >
                <NotFoundIcon />
                <Text className="not-found__title">404 – Page not found</Text>
                <Text className="not-found__text">{paragraf}</Text>
                <button
                    type="button"
                    className="not-found__button"
                    onClick={() => navigate("/home")}
                >
                    Go back home
                </button>
            </div>
        </div>
    );
}
