import React from "react";
import { useNavigate } from "react-router-dom";
import { NotFoundIcon } from "@/pages/NotFoundPage/components/NotFound/index";
import Text from "@/pages/HomePage/components/Text/index";
import { useTypedSelectorHook } from "@/store/hooks/index";
import "@/pages/NotFoundPage/components/NotFound/NotFound.scss";
import { selectTheme } from "@/store/selectors/index";
import { HOME_PAGE_PATH } from "@/routes/constants";

const NOT_FOUNT_PARAGRAPH = `The page you're looking for isn't available.Try to search again or use the go back button below.`;

export default function PageNotFound() {
    const navigate = useNavigate();
    const { theme } = useTypedSelectorHook(selectTheme);

    const handleHomeNavigate = () => {
        navigate(HOME_PAGE_PATH);
    };

    return (
        <div>
            <div
                className={
                    theme === "Light" ? "not-found__container light" : "not-found__container"
                }
            >
                <NotFoundIcon />
                <Text className="not-found__title">404 – Page not found</Text>
                <Text className="not-found__text">{NOT_FOUNT_PARAGRAPH}</Text>
                <button type="button" className="not-found__button" onClick={handleHomeNavigate}>
                    Go back home
                </button>
            </div>
        </div>
    );
}
