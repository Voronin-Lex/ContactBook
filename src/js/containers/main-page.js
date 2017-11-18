import React, {Component} from 'react';
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
                <ContactList/>
            </div>
        )
    }
}