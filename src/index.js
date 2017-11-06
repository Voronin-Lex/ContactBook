import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import {createLogger} from 'redux-logger';
import allReducers from './js/reducers/index'
import { browserHistory } from 'react-router';


const logger = createLogger();

const store = createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render( <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root'));

