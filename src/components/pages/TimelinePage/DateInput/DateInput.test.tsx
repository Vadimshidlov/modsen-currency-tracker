import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { fireEvent } from "@testing-library/react";
import { store } from "@/store";
import { renderWithProviders, screen } from "@/utils/rtl-utils";
import DateInput from "@/components/pages/TimelinePage/DateInput/DateInput";

describe("CurrencyStocks component tests", () => {
    it("should correct render component", async () => {
        renderWithProviders(<DateInput className="date-input" />);

        const inputElement = screen.getByTestId("chart-date-input");

        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass("date-input");
        expect(inputElement).toHaveAttribute("type", "date");
    });

    it("fires onChange event with the correct value", () => {
        const onChange = jest.fn();

        renderWithProviders(<DateInput className="date-input" onChange={onChange} />);

        const inputElement = screen.getByTestId("chart-date-input");
        const testDate = "2024-03-06";
        fireEvent.change(inputElement, { target: { value: testDate } });

        expect(onChange).toHaveBeenCalled();
    });

    it("snapshot matches", async () => {
        const { asFragment } = renderWithProviders(<DateInput className="date-input" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("should match snapshot", () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <DateInput className="date-input" />
                </Provider>,
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
