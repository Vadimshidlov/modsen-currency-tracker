import { RootStateType } from "@/store/reducers";

export const selectTheme = (state: RootStateType) => state.theme;
export const selectModal = (state: RootStateType) => state.modalWindow;
export const selectCurrency = (state: RootStateType) => state.currency;
