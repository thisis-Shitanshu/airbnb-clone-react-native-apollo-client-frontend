import React, {Component} from 'react';
import { Provider } from 'react-redux';

// Import custome files here
import store from './src/redux/store';
import LoggedOut from './src/screens/LoggedOut';
import LogIn from './src/screens/LogIn';
import ForgotPassword from './src/screens/ForgotPassword';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LogIn />
      </Provider>
    );
  }
}
