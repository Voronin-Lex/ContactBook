import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {searchPerson} from '../actions/search-person'
import FormGroup from "react-bootstrap/es/FormGroup";
import FormControl from 'react-bootstrap/lib/FormControl'

class SearchArea extends Component {
    constructor(props) {
        super(props);
        this.state = {searchId: "search", searchValue: ""};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {

        this.setState({searchValue: event.target.value});
        this.props.searchPerson(event.target.value);
    }

    render() {
        return (
            <FormGroup
                bsSize="sm"
                controlId={this.state.searchId}>
                <FormControl
                    type="text"
                    value={this.state.searchValue}
                    onChange={this.handleChange}
                />
            </FormGroup>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        searchPerson: searchPerson
    }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(SearchArea);