import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { store } from "@/store";
import { renderWithProviders, screen } from "@/utils/rtl-utils";
import CurrencyCard from "@/pages/HomePage/components/CurrencyCard/index";

describe("CurrencyCard component tests", () => {
    it("should correct render component", async () => {
        renderWithProviders(<CurrencyCard currencyCode="USD" value={1.25} />);

        expect(screen.getByText("Commercial Dollar")).toBeInTheDocument();
        expect(screen.getByText("R$ 1.25")).toBeInTheDocument();
    });

    it("snapshot matches", async () => {
        const { asFragment } = renderWithProviders(
            <CurrencyCard currencyCode="USD" value={1.25} />,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it("should match snapshot", () => {
        const currencyCode = "USD";
        const value = 1.25;

        const tree = renderer
            .create(
                <Provider store={store}>
                    <CurrencyCard currencyCode={currencyCode} value={value} />
                </Provider>,
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
