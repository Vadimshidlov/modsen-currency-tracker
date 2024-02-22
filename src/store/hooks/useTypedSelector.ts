import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootStateType } from "@/store/reducers";

export const useTypedSelectorHook: TypedUseSelectorHook<RootStateType> = useSelector;
