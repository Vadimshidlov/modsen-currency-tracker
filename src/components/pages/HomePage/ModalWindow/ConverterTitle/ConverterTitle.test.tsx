import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { store } from "@/store";
import { renderWithProviders, screen } from "@/utils/rtl-utils";
import ConvertTitle from "@/components/pages/HomePage/ModalWindow/ConverterTitle/ConverterTitle";

describe("CurrencyStocks component tests", () => {
    it("should correct render component", async () => {
        renderWithProviders(<ConvertTitle currentCurrencyCode="USD" currentCurrencyValue={1.5} />);

        expect(screen.getByText("Commercial Dollar")).toBeInTheDocument();
        expect(screen.getByText("Value for USD:")).toBeInTheDocument();
        expect(screen.getByText("1.5")).toBeInTheDocument();
    });

    it("snapshot matches", async () => {
        const { asFragment } = renderWithProviders(
            <ConvertTitle currentCurrencyCode="USD" currentCurrencyValue={1.5} />,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it("should match snapshot", () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <ConvertTitle currentCurrencyCode="USD" currentCurrencyValue={1.5} />
                </Provider>,
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
