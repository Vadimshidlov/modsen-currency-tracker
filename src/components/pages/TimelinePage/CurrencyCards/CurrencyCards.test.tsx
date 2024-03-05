import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { store } from "@/store";
import { renderWithProviders, screen } from "@/utils/rtl-utils";
import CurrencyCards from "@/components/pages/TimelinePage/CurrencyCards/CurrencyCards";

const mockResponse = {
    meta: {
        last_updated_at: "2024-03-04T23:59:59Z",
    },
    data: {
        USD: { code: "USD", value: 1 },
        EUR: { code: "EUR", value: 1 },
        BTC: { code: "BTC", value: 1 },
        JPY: { code: "JPY", value: 1 },
    },
};

describe("CurrencyCards component tests", () => {
    const onChange = jest.fn();

    it("should correct render component", async () => {
        renderWithProviders(
            <CurrencyCards
                currencyData={mockResponse}
                selectedCurrencyCode="USD"
                onChange={onChange}
            />,
        );

        screen.debug();

        expect(screen.getAllByText("Commercial Dollar")).toHaveLength(2);
        expect(screen.getByText("Euro")).toBeInTheDocument();
        expect(screen.getByText("Bitcoin")).toBeInTheDocument();
        expect(screen.getByText("Yen")).toBeInTheDocument();
        expect(screen.getByText("USD")).toBeInTheDocument();
    });

    it("snapshot matches", async () => {
        const { asFragment } = renderWithProviders(
            <CurrencyCards
                currencyData={mockResponse}
                selectedCurrencyCode="USD"
                onChange={onChange}
            />,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it("should match snapshot", () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <CurrencyCards
                        currencyData={mockResponse}
                        selectedCurrencyCode="USD"
                        onChange={onChange}
                    />
                </Provider>,
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
