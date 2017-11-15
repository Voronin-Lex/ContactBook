import React, {Component} from 'react';
import PersonList from './person-list'
import SelectedPerson from './selected-person';
import LetterPanel from './letter-panel'
import SearchArea from './search-field'
import ContactList from './testBook'

export default class MainPage extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <SearchArea/>
                <LetterPanel/>
                <PersonList/>
                <hr/>
                <SelectedPerson/>
                <hr/>
                <ContactList/>
            </div>
        )
    }
}