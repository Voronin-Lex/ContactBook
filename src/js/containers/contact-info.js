import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {deletePerson} from '../actions/delete-person';
import {selectPerson} from "../actions/select-person";


class ContactInfo extends Component {
    render() {

        if (this.props.person !== null) {
            let styles = {
                backgroundImage: 'url(' + this.props.person.image + ')'
            };
            return (
                <div className="contact-info">
                    <header>
                        <div className="image" style={styles}></div>
                        <h3 className="name">{this.props.person.name}</h3>
                        <div className="btnPanel">
                            <Button id="edit" bsStyle="warning" onClick={() => {
                                window.location.assign("#/edit");
                            }}>edit</Button>
                            <Button id="delete" bsStyle="danger"
                                    onClick={() => {
                                        this.props.deletePerson(this.props.person);
                                        setTimeout(() => this.props.selectPerson(this.props.persons[0], 700));
                                    }}
                            >delete</Button>
                        </div>
                    </header>
                    <section>
                        <p className="homePhone">Home Phone: {this.props.person.homePhone}</p>
                        <p className="Mobile">Mobile: {this.props.person.mobile}</p>
                        <p className="email">Email: {this.props.person.eMail}</p>
                        <p className="skype">Skype: {this.props.person.skype}</p>
                        <p className="birthDate">BirthDate: {this.props.person.birthDate}</p>
                        <p className="Description">Description: {this.props.person.description}</p>
                    </section>
                </div>
            )
        }

        else {
            return(
                <div className="contact-info">
                    <header>
                    </header>
                    <section>
                    </section>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        person: state.selectedPerson,
        persons: state.persons.contacts
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        deletePerson: deletePerson,
        selectPerson: selectPerson
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ContactInfo);

