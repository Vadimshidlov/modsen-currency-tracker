import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { store } from "@/store";
import { renderWithProviders, screen } from "@/utils/rtl-utils";
import Text from "@/components/pages/HomePage/Text/Text";

describe("CurrencyStocks component tests", () => {
    it("should correct render component", async () => {
        renderWithProviders(<Text className="text-class">Hello!</Text>);

        expect(screen.getByText("Hello!")).toBeInTheDocument();
        expect(screen.getByText("Hello!")).toHaveClass("text-class");
    });

    it("snapshot matches", async () => {
        const { asFragment } = renderWithProviders(<Text className="text-class">Hello!</Text>);
        expect(asFragment()).toMatchSnapshot();
    });

    it("should match snapshot", () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <Text className="text-class">Hello!</Text>
                </Provider>,
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
