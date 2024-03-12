import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Loader from "@/components/Loader/index";

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
                        <Loader />
                    </Router>
                </Provider>,
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it("should render toggle-theme button", () => {
        renderWithProviders(
            <Router>
                <Loader />
            </Router>,
        );

        expect(screen.getByTestId("app-loader")).toBeInTheDocument();
    });
});
