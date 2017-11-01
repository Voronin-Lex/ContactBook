export const createContact = (newPerson) => {
    console.log("You created contact: ", newPerson);
    return {
        type: 'ADD_PERSON',
        payload: newPerson

    }
};
