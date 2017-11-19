export default function (state, action) {

    if(typeof state === 'undefined')
        return '#';

    switch (action.type) {
        case 'SELECT_LETTER':
            return action.payload;
        default : return state;
    }
}
