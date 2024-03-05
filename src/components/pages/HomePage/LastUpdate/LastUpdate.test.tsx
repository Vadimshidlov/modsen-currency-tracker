import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import LastUpdate from "@/components/pages/HomePage/LastUpdate/LastUpdate";
import { store } from "@/store";
import { renderWithProviders, screen } from "@/utils/rtl-utils";

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

    it("should render last update date from localStorage", () => {
        const localStorageMock = {
            getItem: jest.fn(),
        };

        Object.defineProperty(window, "localStorage", {
            value: localStorageMock,
        });

        const mockLastUpdateDate = "2024-03-04 12:00 PM";

        localStorageMock.getItem.mockReturnValue(mockLastUpdateDate);

        renderWithProviders(
            <Router>
                <LastUpdate />
            </Router>,
        );

        expect(screen.getByText(`Last updated ${mockLastUpdateDate}`)).toBeInTheDocument();
    });
});
