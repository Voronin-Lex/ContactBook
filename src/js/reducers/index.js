import PersonReducer from './person-reducer'
import {combineReducers} from 'redux';
import SelectPersonReducer from './selected-person-reducer'
import SelectLetterReducer from './selected-letter-reducer'
import SearchReducer from './search-reducer'

const allReducers = combineReducers({
    persons: PersonReducer,
    selectedPerson: SelectPersonReducer,
    selectedLetter: SelectLetterReducer,
    searchPattern : SearchReducer
});

export default allReducers
