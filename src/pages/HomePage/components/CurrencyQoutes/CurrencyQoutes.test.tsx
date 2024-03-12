import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { renderWithProviders, screen } from "@/utils/rtl-utils";
import CurrencyQoutes from "@/pages/HomePage/components/CurrencyQoutes/index";
import { store } from "@/store";

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

describe("CurrencyQoutes component tests", () => {
    it("should correct render component", async () => {
        renderWithProviders(<CurrencyQoutes />);

        expect(screen.getByText("Quotes")).toBeInTheDocument();
    });

    it("snapshot matches", async () => {
        const { asFragment } = renderWithProviders(<CurrencyQoutes />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("should match snapshot", () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <CurrencyQoutes />
                </Provider>,
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it("should correct render component with correct preloaded state", async () => {
        renderWithProviders(<CurrencyQoutes />, {
            preloadedState: {
                currency: {
                    currency: mockResponse,
                    isLoading: false,
                    error: null,
                },
            },
        });

        expect(screen.getByText("Commercial Dollar")).toBeInTheDocument();
        expect(screen.getByText("Euro")).toBeInTheDocument();
        expect(screen.getByText("Bitcoin")).toBeInTheDocument();
        expect(screen.getByText("Yen")).toBeInTheDocument();
    });
});
