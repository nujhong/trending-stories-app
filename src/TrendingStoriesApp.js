import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, Icon, Text } from 'react-native-elements';
import StoryList from './components/StoryList';

export default class TrendingStoriesApp extends Component {
  render() {
    const Brand = (
      <View>
        <Icon color='white' name='trending-up' />
        <Text style={styles.heading}>Trending Stories</Text>
      </View>
    );

    return (
      <View style={styles.box}>
        <Header
          centerComponent={Brand}
          outerContainerStyles={styles.header}
        />
        <StoryList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: { padding: 10 },
  heading: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  header: { backgroundColor: '#2980b9', height: 100 }
});
