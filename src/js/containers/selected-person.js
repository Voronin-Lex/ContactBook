import React, {Component} from 'react';
import {connect} from 'react-redux';

class SelectedPerson extends Component {
    render() {
        if (!this.props.person) {
            return (<div>Select a person...</div>);
        }
        return (
            <div>
                <h2>{this.props.person.name}</h2>
                <h3>Home phone: {this.props.person.homePhone}</h3>
                <h3>Mobile: {this.props.person.mobile}</h3>
                <h3>Email: {this.props.person.eMail}</h3>
                <h3>Skype: {this.props.person.skype}</h3>
                <h3>Date of Birth: {this.props.person.birthDate}</h3>
                <h3>Description: {this.props.person.description}</h3>
            </div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        person: state.selectedPerson
    };
}

export default connect(mapStateToProps)(SelectedPerson);
