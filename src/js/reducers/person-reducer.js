import initialState from './initial-state';

export default function (state, action) {

    if(typeof state === 'undefined'){
        return initialState;
    }

    switch (action.type) {
        case 'ADD_PERSON':
            let newState = {...state, contacts: [...state.contacts, action.payload]};
            return newState;
            break;
        case 'EDIT_PERSON':
            let editedState = {};
            editedState.contacts = state.contacts.map(item => {
                if (item.name === action.payload.name) {
                    let editPerson = {};
                    Object.assign(editPerson, action.payload);
                    return editPerson;
                }
                else {
                    return item;
                }
            });
            return editedState;
            break;
        case 'DELETE_PERSON':
            let contacts = state.contacts.filter(item => item.name!== action.payload.name);
            return {
                ...state, contacts: [...contacts]
            };
            break;
        default: return state;

    }
}