import { act, fireEvent, waitFor } from "@testing-library/react";
import ChartDataForm from "@/components/pages/TimelinePage/ChartDataForm/ChartDataForm";
import { renderWithProviders, screen } from "@/utils/rtl-utils";

describe("ChartDataForm component tests", () => {
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

    it("renders form with correct fields", async () => {
        await act(async () => {
            await waitFor(() => {
                renderWithProviders(<ChartDataForm onFormSubmit={() => {}} onClose={() => {}} />, {
                    container,
                });
            });
        });

        expect(screen.getByText("Change data for chart")).toBeInTheDocument();
        expect(screen.getByTestId("chart-input-high")).toBeInTheDocument();
        expect(screen.getByTestId("chart-input-close")).toBeInTheDocument();
        expect(screen.getByTestId("chart-input-open")).toBeInTheDocument();
        expect(screen.getByTestId("chart-input-low")).toBeInTheDocument();
        expect(screen.getByTestId("chart-submit")).toBeInTheDocument();
    });

    it("calls onFormSubmit when form is submitted with valid data", () => {
        const onFormSubmit = jest.fn();
        const onClose = jest.fn();

        renderWithProviders(<ChartDataForm onFormSubmit={onFormSubmit} onClose={onClose} />);

        const highInput = screen.getByTestId("chart-input-high");
        const closeInput = screen.getByTestId("chart-input-close");
        const openInput = screen.getByTestId("chart-input-open");
        const lowInput = screen.getByTestId("chart-input-low");
        const submitButton = screen.getByTestId("chart-submit");

        fireEvent.change(highInput, { target: { value: "100" } });
        fireEvent.change(closeInput, { target: { value: "90" } });
        fireEvent.change(openInput, { target: { value: "95" } });
        fireEvent.change(lowInput, { target: { value: "85" } });

        fireEvent.click(submitButton);

        expect(onFormSubmit).toHaveBeenCalled();
        expect(onFormSubmit).toHaveBeenCalledWith(100, 90, 95, 85);
        expect(onClose).toHaveBeenCalled();
    });

    it("displays error message when form is submitted with invalid data", () => {
        const onFormSubmit = jest.fn();
        const onClose = jest.fn();

        renderWithProviders(<ChartDataForm onFormSubmit={onFormSubmit} onClose={onClose} />);

        const submitButton = screen.getByTestId("chart-submit");

        fireEvent.click(submitButton);
        expect(
            screen.getByText(
                "High must be higher than low value, close and open must be between high and low values",
            ),
        ).toBeInTheDocument();
    });

    it("clears error message onFocus", () => {
        const onFormSubmit = jest.fn();
        const onClose = jest.fn();

        renderWithProviders(<ChartDataForm onFormSubmit={onFormSubmit} onClose={onClose} />);

        const highInput = screen.getByTestId("chart-input-high");

        fireEvent.change(highInput, { target: { value: "100" } });

        expect(
            screen.queryByText(
                "High must be higher than low value, close and open must be between high and low values",
            ),
        ).not.toBeInTheDocument();
    });

    it("snapshot matches", async () => {
        const onFormSubmit = jest.fn();
        const onClose = jest.fn();

        const { asFragment } = renderWithProviders(
            <ChartDataForm onFormSubmit={onFormSubmit} onClose={onClose} />,
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
