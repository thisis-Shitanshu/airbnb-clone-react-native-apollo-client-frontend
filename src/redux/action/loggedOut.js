import * as types from './types';
import user from '../../data/user.json';

export const logIn = (email, password) => (dispatch, getState) => {
    if (email === user.email && password === user.password ) {
        dispatch(
            setLoggedInState(true)
        );
        return true;
    }
    dispatch(
        setLoggedInState(false)
    );
    return;
}

export const setLoggedInState = (loggedInState) => ({
    type: types.SET_LOGGED_IN_STATE,
    payload: loggedInState
});