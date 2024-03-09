import "@testing-library/jest-dom";
import { act, waitFor } from "@testing-library/react";
import * as ReactHooks from "react";
import MainComponent from "@/components/pages/HomePage/MainComponent/MainComponent";
import { renderWithProviders, screen } from "@/utils/rtl-utils";
import * as getCurrency from "@/store/action-creators/getCurrency";
import * as useTypedSelectorHook from "@/store/hooks/useTypedSelector";

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

afterAll(() => {
    jest.clearAllMocks();
});
afterEach(() => {
    jest.clearAllMocks();
});

jest.mock("react", () => ({
    ...jest.requireActual("react"),
    useState: jest.fn(),
}));

describe("MainComponent component tests", () => {
    beforeEach(() => {});

    it("should render correct data from store and local storage", async () => {
        const localStorageMock = {
            getItem: jest.fn(),
        };

        Object.defineProperty(window, "localStorage", {
            value: localStorageMock,
        });

        const mockLastUpdateDate = "2024-03-04 12:00 PM";

        localStorageMock.getItem.mockReturnValue(mockLastUpdateDate);

        const spyGetCurrencyAction = jest.spyOn(getCurrency, "getCurrency");
        const spyUseTypedSelectorHook = jest
            .spyOn(useTypedSelectorHook, "useTypedSelectorHook")
            .mockReturnValue({ currency: mockResponse });

        const currencyInputValue = "";
        const setCurrencyInputValue = jest.fn();

        (ReactHooks.useState as jest.Mock).mockReturnValue([
            currencyInputValue,
            setCurrencyInputValue,
        ]);

        await act(async () => {
            await waitFor(() => {
                renderWithProviders(<MainComponent />, {
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
                });
            });
        });

        await act(async () => {
            await waitFor(() => {
                expect(spyGetCurrencyAction).toHaveBeenCalled();
                expect(spyUseTypedSelectorHook).toHaveBeenCalled();

                expect(screen.getByText("Last updated 2024-03-04 12:00 PM")).toBeInTheDocument();
                expect(screen.getByText("Stocks")).toBeInTheDocument();
                expect(screen.getByText("Bovespa Index")).toBeInTheDocument();
                expect(screen.getByText("IFIX")).toBeInTheDocument();
                expect(screen.getByText("Quotes")).toBeInTheDocument();
                expect(screen.getByText("Commercial Dollar")).toBeInTheDocument();
                expect(screen.getByText("Bitcoin")).toBeInTheDocument();
                expect(screen.getByText("Yen")).toBeInTheDocument();
                expect(screen.queryAllByText("0.15%")).toHaveLength(2);
            });
        });
    });
});
