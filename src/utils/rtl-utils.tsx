import React, { PropsWithChildren } from "react";
import { Store, applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { RootStateType, rootReducer } from "@/store/reducers";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
    preloadedState?: Partial<RootStateType>;
    store?: Store;
}

export function renderWithProviders(
    ui: React.ReactElement,
    {
        preloadedState = {},
        store = createStore(rootReducer, preloadedState, applyMiddleware(thunk)),
        ...renderOptions
    }: ExtendedRenderOptions = {},
) {
    function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
        return <Provider store={store}>{children}</Provider>;
    }
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export * from "@testing-library/react";

export { renderWithProviders as render };
