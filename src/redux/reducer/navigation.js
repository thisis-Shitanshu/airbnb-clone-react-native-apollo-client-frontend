// Import custome file(s) here.
import createReducer from '../helpers/createReducer';
import * as types from '../action/types';
import AppRouteConfigs from '../../navigators/AppRouteConfigs';

// This will decide which screen will load the first time app is open.
const firstAction = AppRouteConfigs.router.getActionForPathAndParams('LoggedOut');
const initialNavState = AppRouteConfigs.router.getStateForAction(firstAction);

// Log
const loggedInStatus = createReducer({}, {
    [types.SET_LOGGED_IN_STATE](state, action) {
        return action;
    }
})

// Navigation
const nav = (state = initialNavState, action) => {
    const nextState = AppRouteConfigs.router.getStateForAction(action, state);
    return nextState || state;
};

export {
    loggedInStatus,
    nav
};