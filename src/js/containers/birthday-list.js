import React, {Component} from 'react';
import {connect} from 'react-redux';

class BirthDayList extends Component {
    constructor(props) {
        super(props);
        this.twoDays = 172800000;
    }

    getToday() {
        let now = new Date();
        now.setFullYear(1970);
        now.setHours(0);
        now.setMinutes(0);
        now.setSeconds(0);
        return now;
    }

    normalizeBirthdays() {
        return this.props.persons.map((person) => {
            let updatedPerson = Object.assign({}, person);
            let newDate = new Date(person.birthDate);
            newDate.setFullYear(1970);
            newDate.setHours(0);
            updatedPerson.birthDate = newDate;
            return updatedPerson;
        });
    }

    getBirthdayPeople() {
        return this.normalizeBirthdays().filter((person) => {

            let dayDiff = person.birthDate - this.getToday();
            return (dayDiff >= -5000 && dayDiff <= this.twoDays)

        });
    }

    renderList() {

        return this.getBirthdayPeople().map((person) => {
            return (
                <li
                    key={person.name}
                >
                    {person.name}
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        persons: state.persons.contacts
    };
}

export default connect(mapStateToProps)(BirthDayList);
