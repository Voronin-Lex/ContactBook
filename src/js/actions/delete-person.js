export const deletePerson = (person) => {
    console.log("You deleting person: ", person);
    return {
        type: 'DELETE_PERSON',
        payload: person
    }
};
