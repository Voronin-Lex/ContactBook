export const selectLetter = (letter) => {
    console.log("You selected letter: ", letter);
    return {
        type: 'SELECT_LETTER',
        payload: letter
    }
};
