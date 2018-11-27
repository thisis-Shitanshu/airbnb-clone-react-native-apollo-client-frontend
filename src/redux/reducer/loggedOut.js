import createReducer from '../helpers/createReducer';
import * as types from '../action/types';

export const loggedInStatus = createReducer({}, {
    [types.SET_LOGGED_IN_STATE](state, action) {
        return action;
    }
});