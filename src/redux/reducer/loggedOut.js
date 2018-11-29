import { SET_LOGGED_IN_STATE } from '../action/types';

const INITIAL_STATE = {
    loggedInStatus: false
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_LOGGED_IN_STATE:
            return action.payload;
    
        default:
            return state;
    }
}