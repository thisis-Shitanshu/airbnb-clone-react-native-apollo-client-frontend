import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// Import custome files here
import configureStore from './src/redux/store';
import { Root } from './src/navigators/AppNavigator';
import { NETWORK_INTERFACE } from './src/config';

console.disableYellowBox = true;

const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: NETWORK_INTERFACE }),
  cache: new InMemoryCache()
})

export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore}>
        <ApolloProvider client={apolloClient}>
          <Root />
        </ApolloProvider>
      </Provider>
    );
  }
}
