import React, { useRef } from "react";
import { createPortal } from "react-dom";
import "@/components/ModalWindow/ModalWindow.scss";
import { useActions } from "@/store/hooks/useActions";
import { useTypedSelectorHook } from "@/store/hooks/useTypedSelector";
import Text from "@/components/Text/Text";
import CloseModalIcon from "@/assets/svg/modalWindow/icons8-close.svg";
import useEscapeKey from "@/hooks/useCloseModalEscape";
import useOutsideClick from "@/hooks/useOutsideClick";
import SelectCurrency from "@/components/SelectCurrency/SelectCurrency";
import { TextInput } from "@/components/TextInput/TextInput";

export type ModalWindowPropsType = {
    isOpen: boolean;
};

function ModalWindow({ isOpen }: ModalWindowPropsType) {
    const { closeModalWindow } = useActions();
    const { currentCurrencyValue, currentCurrency } = useTypedSelectorHook(
        (state) => state.modalWindow,
    );

    const modalRef = useRef<HTMLDivElement>(null);

    useEscapeKey(closeModalWindow);

    useOutsideClick(closeModalWindow, modalRef);

    if (!isOpen) return null;

    return createPortal(
        <div className="modal__container">
            <div className="modal__content" ref={modalRef}>
                <div className="modal__title">
                    <Text className="modal__selected-currency">
                        {currentCurrency}
                        <Text className="">Value for USD: {currentCurrencyValue}</Text>
                    </Text>
                </div>
                <form className="modal__converter">
                    <SelectCurrency />
                    <TextInput className="currency__input" />
                    <TextInput className="currency__input" placeholder={currentCurrency} disabled />
                </form>

                <CloseModalIcon
                    className="modal__close-button"
                    width={25}
                    height={25}
                    onClick={closeModalWindow}
                />
            </div>
        </div>,
        document.getElementById("portal"),
    );
}

export default ModalWindow;
