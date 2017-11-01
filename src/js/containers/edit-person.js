import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {editPerson} from '../actions/edit-person'

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
                <h3>New Form</h3>
                <form onSubmit={this.handleSubmit}>
                    Name:<br/>
                    <input type="text" id="name" value={this.state.editedPerson.name}
                    />
                    <br/>

                    HomePhone:<br/>
                    <input type="text" id="homePhone" value={this.state.editedPerson.homePhone}
                           onChange={this.handleChange}/>
                    <br/>

                    Mobile:<br/>
                    <input type="text" id="mobile" value={this.state.editedPerson.mobile}
                           onChange={this.handleChange}/>
                    <br/>

                    eMail:<br/>
                    <input type="text" id="eMail" value={this.state.editedPerson.eMail}
                           onChange={this.handleChange}/>
                    <br/>

                    Skype:<br/>
                    <input type="text" id="skype" value={this.state.editedPerson.skype}
                           onChange={this.handleChange}/>
                    <br/>

                    birthDate:<br/>
                    <input type="text" id="birthDate" value={this.state.editedPerson.birthDate}
                           onChange={this.handleChange}/>
                    <br/>

                    description:<br/>
                    <textarea rows="7" cols="50" id="description" value={this.state.editedPerson.description}
                              onChange={this.handleChange}/>
                    <br/>

                    <input type="submit" value="edit contact"/>
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

