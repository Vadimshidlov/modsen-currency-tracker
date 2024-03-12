import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "@/store";
import LastUpdate from "@/components/LastUpdate/LastUpdate";

afterAll(() => {
    jest.clearAllMocks();
});

beforeEach(() => {
    jest.clearAllMocks();
});

describe("LastUpdate component tests", () => {
    it("should match snapshot", () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <Router>
                        <LastUpdate />
                    </Router>
                </Provider>,
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
