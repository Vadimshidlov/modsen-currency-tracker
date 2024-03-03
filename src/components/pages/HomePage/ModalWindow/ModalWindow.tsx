import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "@/components/pages/HomePage/ModalWindow/ModalWindow.scss";
import { useActions } from "@/store/hooks/useActions";
import { useTypedSelectorHook } from "@/store/hooks/useTypedSelector";
import Text from "@/components/pages/HomePage/Text/Text";
import CloseModalIcon from "@/assets/svg/modalWindow/icons8-close.svg";
import useEscapeKey from "@/hooks/useCloseModalEscape";
import useOutsideClick from "@/hooks/useOutsideClick";
import SelectCurrency from "@/components/pages/HomePage/SelectCurrency/SelectCurrency";
import { TextInput } from "@/components/pages/HomePage/TextInput/TextInput";
import { getConvertResult } from "@/utils/currency/getConvertResult";
import ConverterTitle from "@/components/pages/HomePage/ModalWindow/ConverterTitle/ConverterTitle";
import { getCurrencyIcon } from "@/utils/currency/getCurrencyIcon";
import { ModalWindowPropsType } from "@/types/HomePageTypes/types";

function ModalWindow({ isOpen }: ModalWindowPropsType) {
    const { closeModalWindow, selectSecondCurrency } = useActions();
    const { currency } = useTypedSelectorHook((state) => state.currency);
    const {
        currentCurrencyValue,
        currentCurrencyTitle,
        currentCurrencyCode,
        secondCurrencyValue,
        secondCurrencyCode,
    } = useTypedSelectorHook((state) => state.modalWindow);

    const { CurrencyIcon: SelectedCurrencyIcon } = getCurrencyIcon(currentCurrencyCode);
    const { CurrencyIcon: ResultCurrencyIcon } = getCurrencyIcon(secondCurrencyCode);

    const [currencyInputValue, setCurrencyInputValue] = useState<string>("0");
    const [resulInputValue, setResultInputValue] = useState<string>("0");

    const modalRef = useRef<HTMLDivElement>(null);

    const currencyInputHandler = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value.replace(/\D/g, "");
            setCurrencyInputValue(value);
            setResultInputValue(getConvertResult(currentCurrencyValue, secondCurrencyValue, value));
        },
        [currentCurrencyValue, secondCurrencyValue],
    );

    const secondCurrencyHandler = useCallback(
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

    const closeModalHandler = () => {
        closeModalWindow();
        setCurrencyInputValue("0");
        setResultInputValue("0");
    };

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }
    }, [isOpen]);

    useEscapeKey(closeModalHandler);
    useOutsideClick(closeModalHandler, modalRef);

    if (!isOpen) return null;

    return createPortal(
        <div className="modal__container">
            <div className="modal__content" ref={modalRef}>
                <ConverterTitle
                    currentCurrencyCode={currentCurrencyCode}
                    currentCurrencyValue={currentCurrencyValue}
                />
                <form className="modal__converter">
                    <SelectCurrency
                        secondCurrencyCode={secondCurrencyCode}
                        setSecondCurrency={secondCurrencyHandler}
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
                        onChange={currencyInputHandler}
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
                    onClick={closeModalHandler}
                />
            </div>
        </div>,
        document.getElementById("portal"),
    );
}

export default ModalWindow;
