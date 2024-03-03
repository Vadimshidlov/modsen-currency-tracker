export const getConvertResult = (
    firstCoefficient: number,
    secondCoefficient: number,
    value: string,
): string => {
    const result = (firstCoefficient / secondCoefficient) * +value;

    return String(result.toFixed(2));
};
