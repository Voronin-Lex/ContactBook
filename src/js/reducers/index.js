import PersonReducer from './person-reducer'
import {combineReducers} from 'redux';
import SelectReducer from './selected-person-reducer'

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    persons: PersonReducer,
    selectedPerson: SelectReducer
});

export default allReducers
