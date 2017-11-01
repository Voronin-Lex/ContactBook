import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {createContact} from '../actions/create-contact'

class PersonForm extends Component{

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        let newPerson = {
            name: event.target.personName.value,
            homePhone: event.target.homePhone.value,
            mobile: event.target.mobile.value,
            eMail: event.target.email.value,
            skype: event.target.skype.value,
            birthDate: event.target.birthDate.value,
            description: event.target.description.value
        };
        this.props.createContact(newPerson);
        setTimeout(() =>window.location.assign("#/"), 1000);

    }

    render(){
       return(
           <div>
               <h3>New Form</h3>
               <form onSubmit={this.handleSubmit}>
                   Name:<br/>
                   <input type="text"  id="personName" placeholder="enter new name"/>
                   <br/>

                   HomePhone:<br/>
                   <input type="text" id="homePhone" placeholder="enter homePhone"/>
                   <br/>

                   Mobile:<br/>
                   <input type="text" id="mobile" placeholder="enter mobile"/>
                   <br/>

                   eMail:<br/>
                   <input type="text" id="email" placeholder="enter email"/>
                   <br/>

                   Skype:<br/>
                   <input type="text" id="skype" placeholder="enter skype"/>
                   <br/>

                   birthDate:<br/>
                   <input type="text" id="birthDate" placeholder="enter birthDate"/>
                   <br/>

                   description:<br/>
                   <textarea rows="7" cols="50" id="description" placeholder="enter description"/>
                   <br/>

                   <input type="submit" value="add contact"/>

               </form>
           </div>
       )
    }


}

function mapStateToProps(state) {
    return {

    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        createContact: createContact,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(PersonForm);

