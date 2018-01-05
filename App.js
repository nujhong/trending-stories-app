import React, { Component } from 'react';
import { Provider } from 'react-redux';
import TrendingStoriesApp from './src/TrendingStoriesApp';
import configureStore from './src/configureStore';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TrendingStoriesApp />
      </Provider>
    );
  }
};
