import { useCallback, useEffect } from "react";
import { UseCloseModalType } from "@/types/types";

const KEY_NAME_ESC = "Escape";
const KEY_EVENT_TYPE = "keyup";

export default function useEscapeKey(handleClose: UseCloseModalType) {
    const handleEscKey = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === KEY_NAME_ESC) {
                event.preventDefault();

                handleClose();
            }
        },
        [handleClose],
    );

    useEffect(() => {
        document.addEventListener(KEY_EVENT_TYPE, handleEscKey, false);

        return () => {
            document.removeEventListener(KEY_EVENT_TYPE, handleEscKey, false);
        };
    }, [handleEscKey]);
}
