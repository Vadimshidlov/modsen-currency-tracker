import React, { useCallback, useRef, useState } from "react";
import "@/pages/HomePage/components/ModalWindow/ModalWindow.scss";
import { useActions, useTypedSelectorHook } from "@/store/hooks/index";
import Text from "@/pages/HomePage/components/Text/index";
import CloseModalIcon from "@/assets/svg/modalWindow/icons8-close.svg";
import { useEscapeKey } from "@/hooks/index";
import SelectCurrency from "@/pages/HomePage/components/SelectCurrency/index";
import { TextInput } from "@/pages/HomePage/components/TextInput/index";
import { getConvertResult } from "@/utils/currency/index";
import ConverterTitle from "@/pages/HomePage/components/ModalWindow/ConverterTitle/ConverterTitle";
import { ModalWindowPropsType } from "@/types/HomePageTypes";
import { selectCurrency, selectModal } from "@/store/selectors/index";
import { Portal } from "@/components/Portal/index";
import BlurBackground from "@/components/BlurBackground/index";
import { useBodyScroll } from "@/hooks/useBodyScroll";
import { getCurrencyIcon } from "@/utils/currency";

function ModalWindow({ isOpen }: ModalWindowPropsType) {
    const { closeModalWindow, selectSecondCurrency } = useActions();
    const { currency } = useTypedSelectorHook(selectCurrency);
    const {
        currentCurrencyValue,
        currentCurrencyTitle,
        currentCurrencyCode,
        secondCurrencyValue,
        secondCurrencyCode,
    } = useTypedSelectorHook(selectModal);

    const { CurrencyIcon: SelectedCurrencyIcon } = getCurrencyIcon(currentCurrencyCode);
    const { CurrencyIcon: ResultCurrencyIcon } = getCurrencyIcon(secondCurrencyCode);

    const [currencyInputValue, setCurrencyInputValue] = useState("0");
    const [resulInputValue, setResultInputValue] = useState("0");

    const modalRef = useRef<HTMLDivElement>(null);

    const handleInputCurrency = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value.replace(/\D/g, "");
            setCurrencyInputValue(value);
            setResultInputValue(getConvertResult(currentCurrencyValue, secondCurrencyValue, value));
        },
        [currentCurrencyValue, secondCurrencyValue],
    );

    const handleSecondCurrency = useCallback(
        (event: React.ChangeEvent<HTMLSelectElement>) => {
            const { value: selectCurrencyCode, name: selectedSecondCurrency } = event.target;
            const { value: secondStateCurrencyValue } = currency.data[selectCurrencyCode];

            selectSecondCurrency(
                selectedSecondCurrency,
                secondStateCurrencyValue,
                selectCurrencyCode,
            );

            setCurrencyInputValue("0");
            setResultInputValue("0");
        },
        [selectSecondCurrency, currency.data],
    );

    const handleCloseModal = () => {
        closeModalWindow();
        setCurrencyInputValue("0");
        setResultInputValue("0");
    };

    useBodyScroll(isOpen);

    useEscapeKey(handleCloseModal);

    if (!isOpen) return null;

    return (
        <Portal>
            <div className="modal__container" data-testid="modal-window">
                <div className="modal__content" ref={modalRef} data-testid="modal-window-content">
                    <ConverterTitle
                        currentCurrencyCode={currentCurrencyCode}
                        currentCurrencyValue={currentCurrencyValue}
                    />
                    <form className="modal__converter">
                        <SelectCurrency
                            secondCurrencyCode={secondCurrencyCode}
                            setSecondCurrency={handleSecondCurrency}
                            currentCurrencyCode={currentCurrencyCode}
                            data={currency.data}
                        />
                        <div className="currency__result">
                            <ResultCurrencyIcon className="currency__result-icon" />
                            <Text className="currency__result-title">{secondCurrencyCode}:</Text>
                        </div>

                        <TextInput
                            className="currency__input"
                            value={currencyInputValue}
                            onChange={handleInputCurrency}
                        />
                        <div className="currency__result">
                            <SelectedCurrencyIcon className="currency__result-icon" />
                            <Text className="currency__result-title">{currentCurrencyCode}:</Text>
                        </div>
                        <TextInput
                            className="currency__input"
                            placeholder={currentCurrencyTitle}
                            disabled
                            value={resulInputValue}
                        />
                    </form>

                    <CloseModalIcon
                        className="modal__close-button"
                        width={25}
                        height={25}
                        onClick={handleCloseModal}
                    />
                </div>
                <BlurBackground onClick={handleCloseModal} />
            </div>
        </Portal>
    );
}

export default ModalWindow;
