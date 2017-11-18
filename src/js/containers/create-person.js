import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {createContact} from '../actions/create-contact'
import form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'
import img from '../../resources/no-photo.jpg'

class PersonForm extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    isExist(newName){
        for(let i=0; i< this.props.persons.length; i++){
            if(newName.toLowerCase() === this.props.persons[i].name.toLowerCase())
                return true;
        }
        return false;
    }

    handleSubmit(event) {
        event.preventDefault();
        let newPerson = {
            name: event.target.personName.value,
            homePhone: event.target.homePhone.value,
            mobile: event.target.mobile.value,
            eMail: event.target.email.value,
            skype: event.target.skype.value,
            birthDate: event.target.birthDate.value,
            image : img,
            description: event.target.description.value
        };
        console.log(newPerson);
        if(!this.isExist(newPerson.name))
        this.props.createContact(newPerson);
        else
            alert("This contact already exist");
        setTimeout(() => window.location.assign("#/"), 1000);
    }

    render() {
        return (
            <div>
                <h3>New Contact</h3>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup
                        bsSize="sm"
                        controlId="personName">
                        <ControlLabel>Name</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter newName"
                        />
                    </FormGroup>
                    <FormGroup
                        bsSize="sm"
                        controlId="homePhone">
                        <ControlLabel>HomePhone</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter Phone"
                        />
                    </FormGroup>
                    <FormGroup
                        bsSize="sm"
                        controlId="mobile">
                        <ControlLabel>Mobile</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter mobile"
                        />
                    </FormGroup>
                    <FormGroup
                        bsSize="sm"
                        controlId="email">
                        <ControlLabel>eMail</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter email"
                        />
                    </FormGroup>
                    <FormGroup
                        bsSize="sm"
                        controlId="skype">
                        <ControlLabel>Skype</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter skype"
                        />
                    </FormGroup>
                    <FormGroup
                        bsSize="sm"
                        controlId="birthDate">
                        <ControlLabel>birthDate</ControlLabel>
                        <FormControl
                            type="date"
                            placeholder="Enter birthDate"
                        />
                    </FormGroup>
                    <FormGroup
                        bsSize="sm"
                        controlId="description">
                        <ControlLabel>description</ControlLabel>
                        <FormControl
                            componentClass="textarea"
                            placeholder="Enter description"
                        />
                    </FormGroup>
                    <FormGroup
                        bsSize="sm"
                        controlId="photo">
                        <ControlLabel>photo</ControlLabel>
                        <FormControl
                            type="file"
                        />
                    </FormGroup>
                    <Button type="submit" bsStyle="success">
                        Add Contact
                    </Button>
                </form>

            </div>
        )
    }


}

function mapStateToProps(state) {
    return {
        persons: state.persons.contacts
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        createContact: createContact,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(PersonForm);

