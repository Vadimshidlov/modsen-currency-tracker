import "@/components/pages/HomePage/Header/ToggleTheme/ToggleTheme.scss";
import { Component } from "react";
import { connect } from "react-redux";
import { RootStateType } from "@/store/reducers";
import { switchDarkTheme, switchLightTheme } from "@/store/action-creators/toggleTheme";
import { ToggleThemePropsType, ToggleThemeStateType } from "@/types/TimeLinePageTypes/types";

class ToggleTheme extends Component<ToggleThemePropsType, ToggleThemeStateType> {
    constructor(props: ToggleThemePropsType) {
        super(props);

        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        const {
            theme,
            switchLightTheme: switchToLightTheme,
            switchDarkTheme: switchToDarkTheme,
        } = this.props;

        if (theme === "Dark") {
            switchToLightTheme();
        } else {
            switchToDarkTheme();
        }
    }

    render() {
        const { theme } = this.props;

        return (
            <label
                htmlFor="toggle-switch"
                className="toggle-switch"
                data-testid="chart-toggle-switch"
            >
                {null}
                <input
                    id="toggle-switch"
                    type="checkbox"
                    checked={theme === "Light"}
                    onChange={this.handleToggle}
                />
                <div className="slider" />
            </label>
        );
    }
}

const mapStateToProps = (state: RootStateType) => ({
    theme: state.theme.theme,
});

const mapDispatchToProps = {
    switchLightTheme,
    switchDarkTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleTheme);
