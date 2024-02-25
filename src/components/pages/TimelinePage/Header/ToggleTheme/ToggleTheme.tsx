import "@/components/pages/HomePage/Header/ToggleTheme/ToggleTheme.scss";
import { Component } from "react";
import { connect } from "react-redux";
import { RootStateType } from "@/store/reducers";
import { switchDarkTheme, switchLightTheme } from "@/store/action-creators/toggleTheme";

export type ToggleThemePropsType = {
    theme: string;
    switchLightTheme: () => void;
    switchDarkTheme: () => void;
};

export type ToggleThemeStateType = {
    isChecked: boolean;
};

class ToggleTheme extends Component<ToggleThemePropsType, ToggleThemeStateType> {
    constructor(props: ToggleThemePropsType) {
        super(props);
        this.state = {
            isChecked: false,
        };

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

        this.setState((state) => ({
            isChecked: !state.isChecked,
        }));
    }

    render() {
        console.log("Render class ToggleTheme extends Component");

        const { isChecked } = this.state;

        return (
            <label htmlFor="toggle-switch" className="toggle-switch">
                {null}
                <input
                    id="toggle-switch"
                    type="checkbox"
                    checked={isChecked}
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
