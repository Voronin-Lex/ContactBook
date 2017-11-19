import React, { Component } from 'react';
import CreatePersonForm from './js/containers/create-person';
import EditPersonForm from './js/containers/edit-person'
import MainPage from './js/containers/main-page';
import {Switch, Route, HashRouter as Router } from 'react-router-dom'
import {NotFound} from './js/components/not-found'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <Switch>
                <Route  exact path="/" component={MainPage} />
                <Route  path="/create" component={CreatePersonForm}/>
                <Route path="/edit" component={EditPersonForm}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
