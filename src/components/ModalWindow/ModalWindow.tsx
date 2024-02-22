import React, { useRef } from "react";
import { createPortal } from "react-dom";
import "@/components/ModalWindow/ModalWindow.scss";
import { useActions } from "@/store/hooks/useActions";
import { useTypedSelectorHook } from "@/store/hooks/useTypedSelector";
import Text from "@/components/Text/Text";
import CloseModalIcon from "@/assets/svg/modalWindow/icons8-close.svg";
import useEscapeKey from "@/hooks/useCloseModalEscape";
import useOutsideClick from "@/hooks/useOutsideClick";

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
                    <h2 className="modal__selected-currency">
                        {currentCurrency}
                        <Text className="">Value for USD: {currentCurrencyValue}</Text>
                    </h2>
                </div>

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
