import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { renderWithProviders, screen } from "@/utils/rtl-utils";
import AppTitle from "@/components/pages/TimelinePage/AppTitle/AppTitle";

describe("AppTitle component tests", () => {
    it("should correct render component", async () => {
        renderWithProviders(<AppTitle />);

        expect(
            screen.getByText("Quotes for the dollar and other international currencies."),
        ).toBeInTheDocument();
        expect(screen.getByText("Modsen Currency")).toBeInTheDocument();
        expect(screen.getByText("Tracker")).toBeInTheDocument();
    });

    it("snapshot matches", async () => {
        const { asFragment } = renderWithProviders(<AppTitle />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("should match snapshot", () => {
        const snapshot = renderer.create(<AppTitle />).toJSON();

        expect(snapshot).toMatchSnapshot();
    });
});
