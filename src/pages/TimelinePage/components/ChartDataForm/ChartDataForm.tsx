import "@/pages/HomePage/components/ModalWindow/ModalWindow.scss";
import React, { ChangeEvent, Component, FormEvent } from "react";
import CloseModalIcon from "@/assets/svg/modalWindow/icons8-close.svg";
import Text from "@/components/Text/index";
import "@/pages/TimelinePage/components/ChartDataForm/ChartDataForm.scss";
import TextInput from "@/pages/BankCard/components/TextInput/index";
import { validateChartFormSubmit } from "@/utils/chart/index";
import { ChartDataFormPropsType, ChartDataFormStateType } from "@/types/TimeLinePageTypes";
import { Portal } from "@/components/Portal/index";
import BlurBackground from "@/components/BlurBackground/index";

const VALIDATE_ERROR_MESSAGE =
    "High must be higher than low value, close and open must be between high and low values";

class ChartDataForm extends Component<ChartDataFormPropsType, ChartDataFormStateType> {
    constructor(props: ChartDataFormPropsType) {
        super(props);

        this.state = {
            highInputValue: "",
            closeInputValue: "",
            openInputValue: "",
            lowInputValue: "",
            submitError: "",
        };

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputFocus = this.handleInputFocus.bind(this);
    }

    componentDidMount() {
        document.body.classList.add("modal-open");
    }

    componentWillUnmount() {
        document.body.classList.remove("modal-open");
    }

    handleFormSubmit(e: FormEvent) {
        e.preventDefault();
        const { onFormSubmit, onClose } = this.props;

        const { lowInputValue, openInputValue, highInputValue, closeInputValue } = this.state;

        if (
            validateChartFormSubmit(lowInputValue, openInputValue, highInputValue, closeInputValue)
        ) {
            onFormSubmit(+highInputValue, +closeInputValue, +openInputValue, +lowInputValue);
            onClose();

            return;
        }

        this.setState({
            submitError: VALIDATE_ERROR_MESSAGE,
        });
    }

    handleInputFocus() {
        this.setState({
            submitError: "",
        });
    }

    render() {
        const { closeInputValue, lowInputValue, openInputValue, highInputValue, submitError } =
            this.state;
        const { onClose } = this.props;

        return (
            <Portal>
                <div className="chart-form__container">
                    <div className="chart-form__content">
                        <form className="chart-form__form" onSubmit={this.handleFormSubmit}>
                            <Text className="chart-form__title">Change data for chart</Text>

                            <div className="chart-form__field field">
                                <Text className="field_title">High:</Text>
                                <TextInput
                                    className="currency__input"
                                    data-testid="chart-input-high"
                                    value={highInputValue}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                        const { value } = e.target;

                                        this.setState({
                                            highInputValue: value,
                                        });
                                    }}
                                    onFocus={this.handleInputFocus}
                                />
                            </div>
                            <div className="chart-form__field">
                                <Text className="field_title">Close:</Text>
                                <TextInput
                                    className="currency__input"
                                    data-testid="chart-input-close"
                                    value={closeInputValue}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                        const { value } = e.target;

                                        this.setState({
                                            closeInputValue: value,
                                        });
                                    }}
                                    onFocus={this.handleInputFocus}
                                />
                            </div>
                            <div className="chart-form__field">
                                <Text className="field_title">Open:</Text>
                                <TextInput
                                    className="currency__input"
                                    data-testid="chart-input-open"
                                    value={openInputValue}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                        const { value } = e.target;

                                        this.setState({
                                            openInputValue: value,
                                        });
                                    }}
                                    onFocus={this.handleInputFocus}
                                />
                            </div>
                            <div className="chart-form__field">
                                <Text className="field_title">Low:</Text>
                                <TextInput
                                    className="currency__input"
                                    data-testid="chart-input-low"
                                    value={lowInputValue}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                        const { value } = e.target;

                                        this.setState({
                                            lowInputValue: value,
                                        });
                                    }}
                                    onFocus={this.handleInputFocus}
                                />
                            </div>
                            {submitError && (
                                <Text className="chart-form__error">{submitError}</Text>
                            )}
                            <button className="chart-form__submit" data-testid="chart-submit">
                                Update
                            </button>
                        </form>

                        <CloseModalIcon
                            className="chart-form__close-button"
                            width={25}
                            height={25}
                            onClick={onClose}
                        />
                    </div>
                    <BlurBackground onClick={onClose} />
                </div>
            </Portal>
        );
    }
}

export default ChartDataForm;
