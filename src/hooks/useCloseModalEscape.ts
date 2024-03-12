import { useEffect, useRef } from "react";

const KEY_NAME_ESC = "Escape";
const KEY_EVENT_TYPE = "keyup";

export function useEscapeKey(handleClose: () => void) {
    const handleCloseRef = useRef(handleClose);

    useEffect(() => {
        handleCloseRef.current = handleClose;
    }, [handleClose]);

    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === KEY_NAME_ESC) {
                event.preventDefault();

                handleCloseRef.current();
            }
        };

        document.addEventListener(KEY_EVENT_TYPE, handleEscKey, false);

        return () => {
            document.removeEventListener(KEY_EVENT_TYPE, handleEscKey, false);
        };
    }, []);
}
