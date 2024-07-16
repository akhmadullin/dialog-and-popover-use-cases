// helper for generating simple IDs for example for htmlFor attribute
const generateRandomId = (): string => {
    return `${String.fromCharCode(Math.random() * 26 + 97)}${Math.random().toString(36).substr(2, 28)}`;
};

export default generateRandomId;
