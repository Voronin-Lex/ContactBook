import PersonReducer from './person-reducer'
import {combineReducers} from 'redux';
import SelectPersonReducer from './selected-person-reducer'
import SelectLetterReducer from './selected-letter-reducer'
import SearchReducer from './search-reducer'

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    persons: PersonReducer,
    selectedPerson: SelectPersonReducer,
    selectedLetter: SelectLetterReducer,
    searchPattern : SearchReducer
});

export default allReducers
