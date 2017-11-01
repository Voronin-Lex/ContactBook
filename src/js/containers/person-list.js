import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {editPerson} from '../actions/edit-person';
import {deletePerson} from '../actions/delete-person';
import {selectPerson} from '../actions/select-person';
import {Link} from 'react-router-dom'

class PersonList extends Component {

    renderList() {
        return this.props.persons.map((person) => {
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
        persons: state.persons.contacts
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        editPerson: editPerson,
        deletePerson: deletePerson,
        selectPerson: selectPerson
    }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(PersonList);
