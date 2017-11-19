import React, {Component} from 'react';
import BirthDay from './birthday-list'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectPerson} from '../actions/select-person';
import ContactInfo from "./contact-info";

class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {person: this.props.persons[0]};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(contact) {
        this.setState({person: contact});
        this.props.selectPerson(contact)
    }

    filterPersons() {
        if (this.props.currentLetter === '#')
            return this.props.persons;

        let filteredPersons = this.props.persons.filter(person => {
            let name = person.name.split(" ")[0];
            return (name.startsWith(this.props.currentLetter))
        });
        return filteredPersons;
    }

    searchPersons(persons) {
        let matchedContacts = persons.filter(person => {
            let matchName = person.name.toLowerCase().includes(this.props.searchPattern);
            let matchPhone = person.homePhone.toLowerCase().includes(this.props.searchPattern);
            let matchMobile = person.mobile.toLowerCase().includes(this.props.searchPattern);
            let matchEMail = person.eMail.toLowerCase().includes(this.props.searchPattern);
            let matchSkype = person.skype.toLowerCase().includes(this.props.searchPattern);
            let mathDescription = person.description.toLowerCase().includes(this.props.searchPattern);
            return (matchName || matchPhone || matchMobile || matchEMail || matchSkype || mathDescription)

        });
        return matchedContacts;
    }

    render() {
        let filteredPersons = this.filterPersons();
        let matchedPersons = this.searchPersons(filteredPersons);
        let renderedContacts = null;

        if (matchedPersons.length > 0) {
            renderedContacts = matchedPersons.map(c => {
                let imageStyles = {
                    backgroundImage: 'url(' + c.image + ')'
                };
                let contactStyles = {
                    backgroundColor: c === this.state.person ? '#46733E' : ''
                };
                return (
                    <div key={c.name} className="contact" onClick={this.handleClick.bind(this, c)}
                         style={contactStyles}>
                        <span className="image" style={imageStyles}></span>
                        <span className="name">{c.name}</span>
                    </div>
                );
            }, this);
        }

        return (
            <div className="app">
                <div className="list">
                    <h2>Contacts</h2>
                    <div className="contacts-container">
                        {renderedContacts}
                    </div>
                </div>
                <div className="details">
                    <ContactInfo/>
                </div>
                <div className="birthday">
                    <h4>Incoming Birthdays<i className="fa fa-birthday-cake"></i></h4>
                    <BirthDay/>
                </div>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        persons: state.persons.contacts,
        currentLetter: state.selectedLetter,
        searchPattern: state.searchPattern
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        selectPerson: selectPerson
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ContactList);