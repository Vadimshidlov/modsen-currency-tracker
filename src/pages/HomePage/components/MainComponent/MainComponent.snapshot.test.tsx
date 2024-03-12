import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import MainComponent from "@/pages/HomePage/components/MainComponent/index";
import { store } from "@/store";

describe("MainComponent component snapshot tests", () => {
    it("should match snapshot", () => {
        jest.clearAllMocks();

        const tree = renderer
            .create(
                <Provider store={store}>
                    <Router>
                        <MainComponent />
                    </Router>
                </Provider>,
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
