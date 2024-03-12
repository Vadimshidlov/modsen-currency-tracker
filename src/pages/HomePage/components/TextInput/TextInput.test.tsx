import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { store } from "@/store";
import { renderWithProviders, screen } from "@/utils/rtl-utils";
import { TextInput } from "@/pages/HomePage/components/TextInput/index";

describe("CurrencyStocks component tests", () => {
    it("should correct render component", async () => {
        renderWithProviders(<TextInput className="text-input" placeholder="Hello!" />);

        expect(screen.getByTestId("text-input")).toBeInTheDocument();
        expect(screen.getByTestId("text-input")).toHaveClass("text-input");
    });

    it("snapshot matches", async () => {
        const { asFragment } = renderWithProviders(
            <TextInput className="text-input" placeholder="Hello!" />,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it("should match snapshot", () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <TextInput className="text-input" placeholder="Hello!" />
                </Provider>,
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
