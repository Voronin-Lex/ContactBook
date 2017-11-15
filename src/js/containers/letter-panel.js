import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {selectLetter} from '../actions/select-letter'
import Button from 'react-bootstrap/lib/Button'
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup'
import {Link} from "react-router-dom";

class LetterPanel extends Component {
    constructor(props) {
        super(props);
    }

    generateButtons() {

        let buttonCodes = Array.from({length: 26}, (v, i) => {
            return String.fromCharCode(i + 65);
        });

        buttonCodes = ["#", ...buttonCodes];

        return buttonCodes.map(button =>
            <Button bsStyle="primary" key={button} onClick={() => this.props.selectLetter(button)}>{button}</Button>
        )
    }

    render() {
        return (
            <div>
                <ButtonGroup>
                    {this.generateButtons()}
                </ButtonGroup>
                <br/>
                <Link id="AddContact" to="/create">Add contact</Link>
            </div>
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