import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { store } from "@/store";
import { renderWithProviders, screen } from "@/utils/rtl-utils";
import CurrencyCard from "@/pages/TimelinePage/components/CurrencyCard/index";

describe("CurrencyCard component tests", () => {
    it("should correct render component", async () => {
        renderWithProviders(<CurrencyCard currencyCode="USD" theme="Dark" />);

        expect(screen.getByText("Commercial Dollar")).toBeInTheDocument();
        expect(screen.getByText("USD")).toBeInTheDocument();
    });

    it("snapshot matches", async () => {
        const { asFragment } = renderWithProviders(
            <CurrencyCard currencyCode="USD" theme="Dark" />,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it("should match snapshot", () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <CurrencyCard currencyCode="USD" theme="Dark" />
                </Provider>,
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
