import React, { useCallback, useEffect } from "react";

const MOUSE_UP = "mouseup";

export default function useOutsideClick(
    handleClose: () => void,
    ref: React.MutableRefObject<HTMLDivElement | null>,
) {
    const handleClick = useCallback(
        (event: Event) => {
            if (ref?.current?.contains && !ref.current.contains(event.target as Node)) {
                handleClose();
            }
        },
        [handleClose, ref],
    );

    useEffect(() => {
        const handleClickEvent = (event: Event) => handleClick(event);

        document.addEventListener(MOUSE_UP, handleClickEvent);

        return () => {
            document.removeEventListener(MOUSE_UP, handleClick);
        };
    }, [handleClick]);
}
