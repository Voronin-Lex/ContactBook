export const selectPerson = (person) => {
    console.log("You selected person: ", person);
    return {
        type: 'SELECT_PERSON',
        payload: person
    }
};
