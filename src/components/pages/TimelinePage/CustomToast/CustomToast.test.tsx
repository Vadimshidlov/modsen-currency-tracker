import { waitFor } from "@testing-library/react";
import React from "react";
import CustomToast from "@/components/pages/TimelinePage/CustomToast/CustomToast";
import { renderWithProviders, screen } from "@/utils/rtl-utils";

const message = "This is a toast message";
const duration = 3000;

describe("CustomToast component tests", () => {
    let container: HTMLDivElement;

    beforeEach(() => {
        container = document.createElement("div");
        container.id = "portal";
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
    });

    it("renders with correct message and visibility", async () => {
        await waitFor(() => {
            renderWithProviders(<CustomToast message={message} duration={duration} isStart />, {
                container,
            });
        });

        const toastMessage = screen.getByText("This is a toast message");
        expect(toastMessage).toBeInTheDocument();
    });

    it("snapshot matches", async () => {
        const { asFragment } = renderWithProviders(
            <CustomToast message={message} duration={duration} isStart />,
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
