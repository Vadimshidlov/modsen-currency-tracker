import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Text from "@/components/Text/index";
import { store } from "@/store";
import { renderWithProviders, screen } from "@/utils/rtl-utils";

afterAll(() => {
    jest.clearAllMocks();
});

beforeEach(() => {
    jest.clearAllMocks();
});

describe("Footer component tests", () => {
    it("should match snapshot", () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <Router>
                        <Text className="chart-text">Hello</Text>
                    </Router>
                </Provider>,
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it("should render toggle-theme button", () => {
        renderWithProviders(
            <Router>
                <Text className="chart-text">Hello</Text>
            </Router>,
        );

        expect(screen.getByText("Hello")).toBeInTheDocument();
    });
});
