import { combineReducers } from 'redux';

// Import custome file(s) here.
import * as Navigation from './navigation';

export default combineReducers(Object.assign(
    Navigation
));