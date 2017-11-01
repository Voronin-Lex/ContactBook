import React, { Component } from 'react';
import PersonList from './person-list'
import SelectedPerson from './selected-person';
import logo from '../../logo.svg';
import '../../css/App.css';

export default class MainPage extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Contact book (React + Redux)</h1>
                </header>
                <h2>My contacts: </h2>
                <PersonList/>
                <hr/>
                <SelectedPerson/>
                <hr/>
            </div>
        )
    }
}