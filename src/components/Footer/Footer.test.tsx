import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "@/components/Footer/index";
import { store } from "@/store";

describe("Footer component tests", () => {
    it("should match snapshot", () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <Router>
                        <Footer theme="Dark" />
                    </Router>
                </Provider>,
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
