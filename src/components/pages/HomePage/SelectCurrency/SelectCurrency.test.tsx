/* eslint-disable @typescript-eslint/no-unused-vars */
import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { renderWithProviders, screen } from "@/utils/rtl-utils";
import SelectCurrency from "@/components/pages/HomePage/SelectCurrency/SelectCurrency";
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

describe("SelectCurrency component tests", () => {
    const setSecondCurrency = jest.fn();

    const currentCurrencyCode = "USD";
    const secondCurrencyCode = "EUR";

    it("should correct render component", async () => {
        const { getByTestId, getByText } = renderWithProviders(
            <SelectCurrency
                currentCurrencyCode={currentCurrencyCode}
                secondCurrencyCode={secondCurrencyCode}
                setSecondCurrency={setSecondCurrency}
                data={mockResponse.data}
            />,
        );

        const selectElement = getByTestId("select-currency");
        expect(selectElement).toBeInTheDocument();
        expect(getByText("Euro")).toBeInTheDocument();
        expect(getByText("Bitcoin")).toBeInTheDocument();
        expect(getByText("Yen")).toBeInTheDocument();
    });

    it("should call setSecondCurrency function when an option is selected", () => {
        const { getByTestId, getByText } = renderWithProviders(
            <SelectCurrency
                currentCurrencyCode={currentCurrencyCode}
                secondCurrencyCode={secondCurrencyCode}
                setSecondCurrency={setSecondCurrency}
                data={mockResponse.data}
            />,
        );

        const selectElement = getByTestId("select-currency");
        fireEvent.change(selectElement, { target: { value: "USD" } });

        expect(setSecondCurrency).toHaveBeenCalled();
    });

    it("snapshot matches", async () => {
        const { asFragment } = renderWithProviders(
            <SelectCurrency
                currentCurrencyCode={currentCurrencyCode}
                secondCurrencyCode={secondCurrencyCode}
                setSecondCurrency={setSecondCurrency}
                data={mockResponse.data}
            />,
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
