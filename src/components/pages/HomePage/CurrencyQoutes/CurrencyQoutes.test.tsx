import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { renderWithProviders, screen } from "@/utils/rtl-utils";
import CurrencyQoutes from "@/components/pages/HomePage/CurrencyQoutes/CurrencyQoutes";
import { store } from "@/store";

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
});
