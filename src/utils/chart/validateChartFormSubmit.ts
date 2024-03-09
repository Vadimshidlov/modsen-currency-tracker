export const validateChartFormSubmit = (
    lowInputValue: string,
    openInputValue: string,
    highInputValue: string,
    closeInputValue: string,
) => {
    if (
        typeof +lowInputValue === "number" &&
        typeof +openInputValue === "number" &&
        typeof +highInputValue === "number" &&
        typeof +closeInputValue === "number"
    ) {
        if (
            +highInputValue > +lowInputValue &&
            +openInputValue < +highInputValue &&
            +openInputValue > +lowInputValue &&
            +closeInputValue > +lowInputValue &&
            +closeInputValue < +highInputValue
        ) {
            return true;
        }
    }

    return false;
};
