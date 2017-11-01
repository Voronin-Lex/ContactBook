export const editPerson = (person) => {
    console.log("You editing person: ", person);
    let editedPerson = {};
    Object.assign(editedPerson, person);
    return {
        type: 'EDIT_PERSON',
        payload: editedPerson
    }
};
