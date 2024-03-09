export const getCurrentDate = (date: Date = new Date(Date.now())): string => {
    const nowDate = new Date(date);

    const currYear = nowDate.toLocaleString("default", { year: "numeric" });

    const currMonth = nowDate.toLocaleString("default", { month: "2-digit" });

    const currDay = nowDate.toLocaleString("default", { day: "2-digit" });

    return `${currYear}-${currMonth}-${currDay}`;
};
