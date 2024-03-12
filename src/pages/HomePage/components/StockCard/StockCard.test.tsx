import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { store } from "@/store";
import { renderWithProviders, screen } from "@/utils/rtl-utils";
import StockCard from "@/pages/HomePage/components/StockCard/index";

describe("CurrencyStocks component tests", () => {
    it("should correct render component", async () => {
        renderWithProviders(<StockCard stockCode="IIFX" value={0.15} />);

        expect(screen.getByText("Bovespa Index")).toBeInTheDocument();
        expect(screen.getByText("0.15%")).toBeInTheDocument();
    });

    it("snapshot matches", async () => {
        const { asFragment } = renderWithProviders(<StockCard stockCode="IIFX" value={0.15} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("should match snapshot", () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <StockCard stockCode="IIFX" value={0.15} />
                </Provider>,
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
