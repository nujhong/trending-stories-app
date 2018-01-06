import React, { Component } from 'react';
import { FlatList, View, RefreshControl, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import StoryItem from './StoryItem';
import Picker from './Picker';

class StoryList extends Component {
  _keyExtractor = (item) => item.id

  _renderItem = (props) => <StoryItem {...props} select={this.props.selectStory}/>

  _onRefresh = () => this.props.fetchStories()

  componentWillMount() {
    this.props.fetchStories();
  }

  render() {
    const { stories, categories, countries, fetchStories, selectCategory, selectCountry } = this.props;

    // TODO: Declare labels as constants?
    return (
      <View style={styles.container}>
        <View style={styles.pickers}>
          <Picker label='categories' {...categories} select={selectCategory} />
          <Picker label='countries' {...countries} select={selectCountry} />
        </View>

        <FlatList
          data={stories}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          refreshControl={
            <RefreshControl
              refreshing={!this.props.stories}
              onRefresh={this._onRefresh}
            />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  pickers: { flexDirection: 'row' }
})

function mapStateToProps({ stories, categories, countries }) {
  return { stories, categories, countries }
}

export default connect(mapStateToProps, actions)(StoryList);
