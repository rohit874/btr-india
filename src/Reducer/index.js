import {combineReducers} from 'redux';
import basketReducer from './basketReducer';

const allReducer = combineReducers({
    basketReducer
});

export default allReducer;