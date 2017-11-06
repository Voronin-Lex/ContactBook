import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {editPerson} from '../actions/edit-person';
import {deletePerson} from '../actions/delete-person';
import {selectPerson} from '../actions/select-person';
import {Link} from 'react-router-dom'

class PersonList extends Component {

    filterPersons(){
        if(this.props.currentLetter === '#')
            return this.props.persons;

        let filteredPersons = this.props.persons.filter(person => {
            let name = person.name.split(" ")[0];
            if(name.startsWith(this.props.currentLetter))
                return person;
        });
        return filteredPersons;
    }

    searchPersons(persons){
        let matchedContacts = persons.filter(person => {
            let matchName = person.name.toLowerCase().includes(this.props.searchPattern);
            let matchPhone =  person.homePhone.toLowerCase().includes(this.props.searchPattern);
            let matchMobile =  person.mobile.toLowerCase().includes(this.props.searchPattern);
            let matchEMail =  person.eMail.toLowerCase().includes(this.props.searchPattern);
            let matchSkype =  person.skype.toLowerCase().includes(this.props.searchPattern);
            let mathDescription = person.description.toLowerCase().includes(this.props.searchPattern);
            if(matchName || matchPhone || matchMobile || matchEMail || matchSkype || mathDescription)
                return person
        });
        return matchedContacts;
    }


    renderList() {

        let filteredPersons = this.filterPersons();
        let matchedPersons = this.searchPersons(filteredPersons);
        return matchedPersons.map((person) => {
            return (
                <li
                    key={person.name}
                >
                    {person.name}
                    <button onClick={() => {
                        this.props.selectPerson(person);
                        window.location.assign("#/edit");
                    }}>edit
                    </button>
                    <button onClick={() => this.props.deletePerson(person)}>delete</button>
                    <button onClick={() => this.props.selectPerson(person)}>details</button>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <Link to="/create">Add contact</Link>
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        );
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
        editPerson: editPerson,
        deletePerson: deletePerson,
        selectPerson: selectPerson,
    }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(PersonList);
