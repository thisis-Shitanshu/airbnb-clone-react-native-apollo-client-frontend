import React from 'react';
import {
    compose,
    createStore,
    applyMiddleware
} from 'redux';
import { 
    reduxifyNavigator,
    createReactNavigationReduxMiddleware
 } from 'react-navigation-redux-helpers';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { connect } from 'react-redux';

// Import custome file(s) here.
import AppRouteConfigs from './AppRouteConfigs';
import reducer from '../redux/reducer';

// 'react-navigation-redux-helpers'
// A Redux middleware is used so that any events that mutate the navigation state properly trigger React Navigation's event listeners.
const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);


/**
 * Any navigator can be passed a navigation prop to turn it into a "controlled" component, which defers state management to its parent. This mechanism is used in React Navigation to nest navigators, but it can also be used to customize state management.
 */

const App = reduxifyNavigator(AppRouteConfigs, 'root');
const mapStateToProps = state => ({
    state: state.nav
});


const AppWithNavigationState = connect(mapStateToProps)(App);

// Store
const loggerMiddleware = createLogger({ predicate: () => __DEV__ });

const configureStore = (initialState) => {
    const enhancer = compose(
        applyMiddleware(
            middleware,
            thunkMiddleware,
            loggerMiddleware
        )
    );
    return createStore(reducer, initialState, enhancer);
}

const Root = () => <AppWithNavigationState />;

export {
    configureStore,
    Root
};