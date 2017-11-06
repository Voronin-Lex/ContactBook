import React, { Component } from 'react';
import PersonList from './person-list'
import SelectedPerson from './selected-person';
import logo from '../../logo.svg';
import '../../css/App.css';
import BirthDay from './birthday-list'
import LetterPanel from './letter-panel'
import SearchArea from './search-field'

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
                <SearchArea/>
                <hr/>
                <LetterPanel/>
                <hr/>
                <h2>My contacts: </h2>
                <PersonList/>
                <hr/>
                <SelectedPerson/>
                <hr/>
                <BirthDay/>
            </div>
        )
    }
}