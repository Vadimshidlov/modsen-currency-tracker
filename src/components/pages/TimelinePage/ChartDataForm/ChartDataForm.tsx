import "@/components/pages/HomePage/ModalWindow/ModalWindow.scss";
import { createPortal } from "react-dom";
import React, { ChangeEvent, Component, FormEvent } from "react";
import CloseModalIcon from "@/assets/svg/modalWindow/icons8-close.svg";
import Text from "@/components/pages/TimelinePage/Text/Text";
import "@/components/pages/TimelinePage/ChartDataForm/ChartDataForm.scss";
import TextInput from "@/components/pages/BankCard/TextInput/TextInput";
import { validateChartFormSubmit } from "@/utils/chart/validateChartFormSubmit";
import { ChartDataFormPropsType, ChartDataFormStateType } from "@/types/TimeLinePageTypes/types";

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

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onFocusHandler = this.onFocusHandler.bind(this);
    }

    onSubmitHandler(e: FormEvent) {
        e.preventDefault();
        const { onFormSubmit, onClose } = this.props;

        const { lowInputValue, openInputValue, highInputValue, closeInputValue } = this.state;

        if (
            validateChartFormSubmit(lowInputValue, openInputValue, highInputValue, closeInputValue)
        ) {
            onFormSubmit(+highInputValue, +closeInputValue, +openInputValue, +lowInputValue);
            onClose();
        } else {
            this.setState({
                submitError: VALIDATE_ERROR_MESSAGE,
            });
        }
    }

    onFocusHandler() {
        this.setState({
            submitError: "",
        });
    }

    render() {
        const { closeInputValue, lowInputValue, openInputValue, highInputValue, submitError } =
            this.state;
        const { onClose } = this.props;

        return createPortal(
            <div className="chart-form__container">
                <div className="chart-form__content">
                    <form className="chart-form__form" onSubmit={this.onSubmitHandler}>
                        <Text className="chart-form__title">Change data for chart</Text>

                        <div className="chart-form__field field">
                            <Text className="field_title">High:</Text>
                            <TextInput
                                className="currency__input"
                                value={highInputValue}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    const { value } = e.target;

                                    this.setState({
                                        highInputValue: value,
                                    });
                                }}
                                onFocus={this.onFocusHandler}
                            />
                        </div>
                        <div className="chart-form__field">
                            <Text className="field_title">Close:</Text>
                            <TextInput
                                className="currency__input"
                                value={closeInputValue}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    const { value } = e.target;

                                    this.setState({
                                        closeInputValue: value,
                                    });
                                }}
                                onFocus={this.onFocusHandler}
                            />
                        </div>
                        <div className="chart-form__field">
                            <Text className="field_title">Open:</Text>
                            <TextInput
                                className="currency__input"
                                value={openInputValue}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    const { value } = e.target;

                                    this.setState({
                                        openInputValue: value,
                                    });
                                }}
                                onFocus={this.onFocusHandler}
                            />
                        </div>
                        <div className="chart-form__field">
                            <Text className="field_title">Low:</Text>
                            <TextInput
                                className="currency__input"
                                value={lowInputValue}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    const { value } = e.target;

                                    this.setState({
                                        lowInputValue: value,
                                    });
                                }}
                                onFocus={this.onFocusHandler}
                            />
                        </div>
                        {submitError && <Text className="chart-form__error">{submitError}</Text>}
                        <button className="chart-form__submit">Update</button>
                    </form>

                    <CloseModalIcon
                        className="chart-form__close-button"
                        width={25}
                        height={25}
                        onClick={onClose}
                    />
                </div>
            </div>,
            document.getElementById("portal"),
        );
    }
}

export default ChartDataForm;
