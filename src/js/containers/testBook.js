import React, {Component} from 'react';
import Button from 'react-bootstrap/lib/Button'
import FontAwesome from 'react-fontawesome'
import BirthDay from './birthday-list'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

var contactsArray = [
    {
        name: 'Mary Margaret Blanchard',
        phone: '555-1234',
        email: 'snowwhite@ouatmail.com',
        address: '945 N. Storybrook Ln',
        image: 'http://assets.wornon.tv/uploads/2012/03/s01e05-marys-brown-coat-over-teal-skirt-yellow-flatsb.jpg',
        isActive: true
    },
    {
        name: 'David Nolan',
        phone: '555-9876',
        email: 'princecharming@ouatmail.com',
        address: '945 N. Storybrook Ln',
        image: 'http://cdn.playbuzz.com/cdn/e6516fc7-27c5-4798-8097-3553691017a2/5cab9b6e-6a4c-4bda-90fe-c8af89826b03.jpg',
        isActive: false
    },
    {
        name: 'Emma Swan',
        phone: '555-2345',
        email: 'thesavior@ouatmail.com',
        address: '693 N. Storybrook Ln',
        image: 'https://a.wattpad.com/cover/4106257-368-k161010.jpg',
        isActive: false
    },
    {
        name: 'Regina Mills',
        phone: '555-6667',
        email: 'evilqueen@ouatmail.com',
        address: '1313 E. Mayor St',
        image: 'https://s-media-cache-ak0.pinimg.com/originals/11/d3/e9/11d3e91be6df715f88d543374c039e1d.jpg',
        isActive: false
    },
    {
        name: 'Mr. Gold',
        phone: '555-4653',
        email: 'rumplestiltskin@ouatmail.com',
        address: '101 N. Main St',
        image: 'http://happynicetimepeoplecom.c.presscdn.com/wp-content/uploads/2014/09/Boardwalk-Empire-maybe.jpg',
        isActive: false
    }
];

export default class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {person: contactsArray[0]};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(contact) {
        this.setState({person: contact});
    }

    render() {
        return (
            <div className="app">
                <div className="list">
                    <div className="contacts-container">
                        {contactsArray.map( c => {
                            console.log(c);
                            let imageStyles = {
                                backgroundImage: 'url(' + c.image + ')'
                            };
                            let contactStyles = {
                                backgroundColor: c === this.state.person ? '#46733E' : ''
                            };
                            return (
                                <div className="contact" onClick={this.handleClick.bind(this, c)} style={contactStyles}>
                                    <span className="image" style={imageStyles}></span>
                                    <span className="name">{c.name}</span>
                                </div>
                            );
                        }, this)}
                    </div>
                </div>
                <div className="details">
                    <ContactInfo person={this.state.person}/>
                </div>
                <div className="birthday">
                    <h4>Incoming Birthdays<i className="fa fa-birthday-cake"></i></h4>
                    <BirthDay/>
                </div>
            </div>
        )
    }

}

class ContactInfo extends Component {
    constructor(props) {
        super(props);
        this.styles = {
            backgroundImage: 'url(' + this.props.person.image + ')'
        }
    }

    render() {
        return (
            <div className="contact-info">
                <header>
                    <div className="image" style={this.styles}></div>
                    <h3 className="name">{this.props.person.name}</h3>
                    <div className="btnPanel">
                        <Button id="edit" bsStyle="warning">edit</Button>
                        <Button id="delete" bsStyle="danger">delete</Button>
                    </div>
                </header>
                <section>
                    <p className="phone">Phone: {this.props.person.phone}</p>
                    <p className="email">Email: {this.props.person.email}</p>
                    <p className="address">Address: {this.props.person.address}</p>
                </section>
            </div>
        )
    }
}