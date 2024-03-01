export const getLastUpdateTime = () => {
    const lastUpdateDate = new Date();
    const hours = lastUpdateDate.getHours();
    const minutes = lastUpdateDate.getMinutes();
    const month = lastUpdateDate.toLocaleString("en-US", { month: "long" });
    const day = lastUpdateDate.getDate();
    const ampm = hours >= 12 ? "pm" : "am";

    const lastUpdateDateResult = `${day} ${month} at ${hours}:${minutes}${ampm}`;
    return lastUpdateDateResult;
};
