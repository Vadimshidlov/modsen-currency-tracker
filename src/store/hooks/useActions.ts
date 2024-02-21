import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as ThemeActionCreators from "@/store/action-creators/toggleTheme";
import * as CurrentCurrencyActionCreators from "@/store/action-creators/getCurrency";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(
        {
            ...ThemeActionCreators,
            ...CurrentCurrencyActionCreators,
        },
        dispatch,
    );
};
