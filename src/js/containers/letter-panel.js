import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {selectLetter} from '../actions/select-letter'

class LetterPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {navId: "pannel"}
    }

    generateButtons() {

        let buttonCodes = Array.from({length: 26}, (v, i) => {
            return String.fromCharCode(i + 65);
        });

        buttonCodes = ["#", ...buttonCodes];

        return buttonCodes.map( button =>
            <button key={button} onClick={() => this.props.selectLetter(button)}>{button}</button>
        )
    }

    render() {
        return (
            <nav id={this.state.navId}>
                {this.generateButtons()}
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        selectLetter: selectLetter
    }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(LetterPanel);