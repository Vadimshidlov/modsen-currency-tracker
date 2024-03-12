import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { fireEvent, waitFor } from "@testing-library/react";
import SearchCurrency from "@/pages/BankCard/components/SearchCurrency/SearchCurrency";
import { store } from "@/store";
import { renderWithProviders, screen } from "@/utils/rtl-utils";

afterAll(() => {
    jest.clearAllMocks();
});

beforeEach(() => {
    jest.clearAllMocks();
});

const mockResponse = {
    meta: {
        last_updated_at: "2024-03-04T23:59:59Z",
    },
    data: {
        USD: { code: "USD", value: 1 },
        EUR: { code: "EUR", value: 1 },
        BTC: { code: "BTC", value: 1 },
        JPY: { code: "JPY", value: 1 },
        AUD: { code: "AUD", value: 1 },
    },
};

describe("Footer component tests", () => {
    it("should match snapshot", () => {
        const onSearchCurrencyValue = jest.fn();
        const handleSelectCurrency = jest.fn();

        const tree = renderer
            .create(
                <Provider store={store}>
                    <Router>
                        <SearchCurrency
                            onSearchCurrencyValue={onSearchCurrencyValue}
                            searchCurrencyValue=""
                            handleSelectCurrency={handleSelectCurrency}
                        />
                    </Router>
                </Provider>,
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it("should switch theme when toggle is clicked", async () => {
        const onSearchCurrencyValue = jest.fn();
        const handleSelectCurrency = jest.fn();

        renderWithProviders(
            <Router>
                <SearchCurrency
                    onSearchCurrencyValue={onSearchCurrencyValue}
                    searchCurrencyValue=""
                    handleSelectCurrency={handleSelectCurrency}
                />
            </Router>,
            {
                preloadedState: {
                    currency: {
                        currency: mockResponse,
                        isLoading: false,
                        error: null,
                    },
                    modalWindow: {
                        isOpen: false,
                        currentCurrencyTitle: "",
                        currentCurrencyCode: "",
                        currentCurrencyValue: 0,
                        secondCurrencyTitle: "",
                        secondCurrencyCode: "",
                        secondCurrencyValue: 0,
                    },
                },
            },
        );

        await waitFor(() => {
            expect(screen.getByTestId("map-search-input")).toBeInTheDocument();

            const input = screen.getByTestId("map-search-input");

            fireEvent.change(input, { target: { value: "USD" } });

            expect(onSearchCurrencyValue).toHaveBeenCalledTimes(3);
        });
    });
});

describe("shuold print and renred correct data", () => {
    it("should", async () => {
        const onSearchCurrencyValue = jest.fn();
        const handleSelectCurrency = jest.fn();

        renderWithProviders(
            <Router>
                <SearchCurrency
                    onSearchCurrencyValue={onSearchCurrencyValue}
                    searchCurrencyValue="u"
                    handleSelectCurrency={handleSelectCurrency}
                />
            </Router>,
            {
                preloadedState: {
                    currency: {
                        currency: mockResponse,
                        isLoading: false,
                        error: null,
                    },
                    modalWindow: {
                        isOpen: false,
                        currentCurrencyTitle: "",
                        currentCurrencyCode: "",
                        currentCurrencyValue: 0,
                        secondCurrencyTitle: "",
                        secondCurrencyCode: "",
                        secondCurrencyValue: 0,
                    },
                },
            },
        );

        await waitFor(() => {
            expect(screen.getByTestId("map-search-input")).toBeInTheDocument();

            expect(screen.getByText("USD")).toBeInTheDocument();
            expect(screen.getByText("EUR")).toBeInTheDocument();
            expect(screen.getByText("AUD")).toBeInTheDocument();
        });
    });
});
