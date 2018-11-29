import React, { Component } from 'react';

// Import custome file(s) here.
import LoggedInTabNavigator from '../navigators/LoggedInTabsNavigator';

export default class LoggedIn extends Component {
    render() {
        return (
            <LoggedInTabNavigator />
        );
    }
}