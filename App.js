import React, {Component} from 'react';
import { Provider } from 'react-redux';

// Import custome files here
import { Root, configureStore } from './src/navigators/AppNavigator';

export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore({})}>
        <Root />
      </Provider>
    );
  }
}
