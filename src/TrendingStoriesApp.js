import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { Header, Icon, Text } from 'react-native-elements';
import StoryList from './components/StoryList';
import configureStore from './configureStore';

const store = configureStore();

export default class TrendingStoriesApp extends Component {
  render() {
    const Brand = (
      <View>
        <Icon color='white' name='trending-up' />
        <Text style={styles.heading}>Trending Stories</Text>
      </View>
    );

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header
            centerComponent={Brand}
            outerContainerStyles={styles.header}
          />
          <StoryList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  heading: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  header: { backgroundColor: '#2980b9', height: 100 }
});
