const getOptionId = (innerId: string, optionIndex: number): string => {
    return `${innerId}-${optionIndex}`;
};

export default getOptionId;
