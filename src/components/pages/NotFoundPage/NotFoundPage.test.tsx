import "@testing-library/jest-dom";
import * as ReactRouterDom from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { fireEvent } from "@testing-library/react";
import { renderWithProviders, screen } from "@/utils/rtl-utils";
import NotFoundPage from "@/components/pages/NotFoundPage/NotFoundPage";
import * as useTypedSelectorHook from "@/store/hooks/useTypedSelector";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn(),
}));

describe("CurrencyStocks component tests", () => {
    it("should correct render component", async () => {
        jest.spyOn(useTypedSelectorHook, "useTypedSelectorHook").mockReturnValue({
            theme: { theme: "Dark" },
        });

        const navigate = jest.fn();

        (ReactRouterDom.useNavigate as jest.Mock).mockReturnValue(navigate);

        renderWithProviders(
            <Router>
                <NotFoundPage />
            </Router>,
        );

        expect(screen.getByText("404 – Page not found")).toBeInTheDocument();
        expect(screen.getByText("Go back home")).toBeInTheDocument();
        expect(
            screen.getByText(
                "The page you're looking for isn't available.Try to search again or use the go back button below.",
            ),
        ).toBeInTheDocument();
    });

    it("should navigate to home page when button is clicked", () => {
        const navigate = jest.fn();
        (ReactRouterDom.useNavigate as jest.Mock).mockReturnValue(navigate);

        renderWithProviders(
            <Router>
                <NotFoundPage />
            </Router>,
        );

        fireEvent.click(screen.getByText("Go back home"));

        expect(navigate).toHaveBeenCalledWith("/home");
    });

    it("snapshot matches", async () => {
        const { asFragment } = renderWithProviders(
            <Router>
                <NotFoundPage />
            </Router>,
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
