import React from "react";
import ChartDate from "@/pages/TimelinePage/components/ChartDate/index";
import { renderWithProviders, screen } from "@/utils/rtl-utils";

describe("ChartDate component tests", () => {
    it("renders with correct date value and theme", () => {
        const onChange = jest.fn();
        const dateValue = "2024-03-05";

        renderWithProviders(<ChartDate onChange={onChange} dateValue={dateValue} />);

        const dateInput = screen.getByDisplayValue("2024-03-05");
        expect(dateInput).toBeInTheDocument();

        const dateTitle = screen.getByText("From:");
        expect(dateTitle).toBeInTheDocument();

        expect(dateInput).toHaveClass("currency-chart__date-input");
        expect(dateTitle).toHaveClass("currency-chart__date-title");
    });

    it("snapshot matches", async () => {
        const onChange = jest.fn();
        const dateValue = "2024-03-05";

        const { asFragment } = renderWithProviders(
            <ChartDate onChange={onChange} dateValue={dateValue} />,
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
