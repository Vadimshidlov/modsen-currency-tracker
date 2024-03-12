import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { renderWithProviders } from "@/utils/rtl-utils";
import NotFound from "@/pages/NotFoundPage/components/NotFound/NotFound";

describe("CurrencyStocks component tests", () => {
    it("snapshot matches", async () => {
        const { asFragment } = renderWithProviders(
            <Router>
                <NotFound />
            </Router>,
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
