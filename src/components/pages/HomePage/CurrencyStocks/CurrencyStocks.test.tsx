import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { store } from "@/store";
import { renderWithProviders, screen } from "@/utils/rtl-utils";
import CurrencyStocks from "@/components/pages/HomePage/CurrencyStocks/CurrencyStocks";

describe("CurrencyStocks component tests", () => {
    it("should correct render component", async () => {
        renderWithProviders(<CurrencyStocks />);

        expect(screen.getByText("Stocks")).toBeInTheDocument();
        expect(screen.getByText("Bovespa Index")).toBeInTheDocument();
        expect(screen.queryAllByText("0.15%")).toHaveLength(2);
        expect(screen.getByText("IFIX")).toBeInTheDocument();
    });

    it("snapshot matches", async () => {
        const { asFragment } = renderWithProviders(<CurrencyStocks />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("should match snapshot", () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <CurrencyStocks />
                </Provider>,
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
