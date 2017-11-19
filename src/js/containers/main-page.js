import React, {Component} from 'react';
import LetterPanel from './letter-panel'
import SearchArea from './search-field'
import ContactList from './contacts'

export default class MainPage extends Component {

    render() {
        return (
            <div>
                <SearchArea/>
                <LetterPanel/>
                <ContactList/>
            </div>
        )
    }
}