export const throttle = (mainFunction: () => void, delay: number) => {
    let timerFlag: null | NodeJS.Timeout = null;

    return () => {
        if (timerFlag === null) {
            mainFunction();
            timerFlag = setTimeout(() => {
                timerFlag = null;
            }, delay);
        }
    };
};
