import img from '../../resources/no-photo.jpg'

export default function (state, action) {

    let defaultContact = {
        name: "Nick Patrick",
        homePhone: "990-12-10",
        mobile: "114-15-22",
        eMail: "nick@gmail.com",
        skype: "zanozza19",
        birthDate: "1990-01-10",
        image: img,
        description: "old fellow Nicki"
    };

    if (typeof state === 'undefined')
        return defaultContact;

    switch (action.type) {
        case 'SELECT_PERSON':
            return (typeof action.payload !== 'undefined')
                ? action.payload
                : null;
        default: return state;
    }
}
