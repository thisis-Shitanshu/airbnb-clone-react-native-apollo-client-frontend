import React, {Component} from 'react';
import { Provider } from 'react-redux';

// Import custome files here
import configureStore from './src/redux/store';
import { Root } from './src/navigators/AppNavigator';

console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore}>
        <Root />
      </Provider>
    );
  }
}
