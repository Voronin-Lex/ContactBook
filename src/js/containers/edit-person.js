import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {editPerson} from '../actions/edit-person'
import form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'

class PersonForm extends Component {

    constructor(props) {
        super(props);
        let initialState = {};
        Object.assign(initialState, this.props.editedPerson);
        this.state = {editedPerson: initialState};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let id = event.target.id;
        let newState = Object.assign({}, this.state.editedPerson);
        newState[id] = event.target.value;
        this.setState({editedPerson: newState});
        //this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        let editedPerson = {
            name: event.target.name.value,
            homePhone: event.target.homePhone.value,
            mobile: event.target.mobile.value,
            eMail: event.target.eMail.value,
            skype: event.target.skype.value,
            birthDate: event.target.birthDate.value,
            description: event.target.description.value
        };
        this.props.editContact(editedPerson);
        setTimeout(() => window.location.assign("#/"), 1000);

    }

    render() {
        return (
            <div>
                <h3>Edit Contact</h3>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup
                        bsSize="sm"
                        controlId="name">
                        <ControlLabel>Name</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.editedPerson.name}
                        />
                    </FormGroup>
                    <FormGroup
                        bsSize="sm"
                        controlId="homePhone">
                        <ControlLabel>HomePhone</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.editedPerson.homePhone}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup
                        bsSize="sm"
                        controlId="mobile">
                        <ControlLabel>Mobile</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.editedPerson.mobile}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup
                        bsSize="sm"
                        controlId="eMail">
                        <ControlLabel>eMail</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.editedPerson.eMail}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup
                        bsSize="sm"
                        controlId="skype">
                        <ControlLabel>Skype</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.editedPerson.skype}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup
                        bsSize="sm"
                        controlId="birthDate">
                        <ControlLabel>birthDate</ControlLabel>
                        <FormControl
                            type="date"
                            value={this.state.editedPerson.birthDate}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup
                        bsSize="sm"
                        controlId="description">
                        <ControlLabel>description</ControlLabel>
                        <FormControl
                            componentClass="textarea"
                            value={this.state.editedPerson.description}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button type="submit" bsStyle="success">
                        Edit Contact
                    </Button>
                </form>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        editedPerson: state.selectedPerson
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        editContact: editPerson,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(PersonForm);

