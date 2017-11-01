export default function (state = null, action) {
    switch (action.type) {
        case 'SELECT_PERSON':
            return action.payload;
            break;
    }
    return state;
}
