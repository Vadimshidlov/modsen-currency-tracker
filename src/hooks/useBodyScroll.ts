import { useEffect } from "react";

export const useBodyScroll = (isModalOpen: boolean) => {
    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }
    }, [isModalOpen]);
};
