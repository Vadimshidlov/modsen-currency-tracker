import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { fireEvent, waitFor } from "@testing-library/react";
import Header from "@/components/pages/HomePage/Header/Header";
import { store } from "@/store";
import { renderWithProviders, screen } from "@/utils/rtl-utils";
import * as togglethemeActions from "@/store/action-creators/toggleTheme";

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
                        <Header />
                    </Router>
                </Provider>,
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it("should render toggle-theme button", () => {
        renderWithProviders(
            <Router>
                <Header />
            </Router>,
        );

        expect(screen.getByTestId("toggle-switch")).toBeInTheDocument();
    });

    it("should switch theme when toggle is clicked", async () => {
        const spySwitchLightTheme = jest.spyOn(togglethemeActions, "switchLightTheme");
        const spySwitchDarkTheme = jest.spyOn(togglethemeActions, "switchDarkTheme");

        renderWithProviders(
            <Router>
                <Header />
            </Router>,
        );

        await waitFor(() => {
            const toggleSwitch = screen.getByTestId("toggle-switch");
            fireEvent.click(toggleSwitch);
        });

        expect(spySwitchLightTheme).toHaveBeenCalledTimes(1);
        expect(spySwitchDarkTheme).not.toHaveBeenCalled();
    });
});
