export const searchPerson = (pattern) => {
    return {
        type: 'SEARCH_PERSON',
        payload: pattern.toLowerCase()
    }
};
