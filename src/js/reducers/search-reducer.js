export default function (state, action) {

    if(typeof state === 'undefined')
        return '';

    switch (action.type) {
        case 'SEARCH_PERSON':
            return action.payload;
        default : return state;
    }
}
