import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as ThemeActionCreators from "@/store/action-creators/toggleTheme";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ThemeActionCreators, dispatch);
};
