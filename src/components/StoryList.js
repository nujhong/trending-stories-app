import React, { Component } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import StoryItem from './StoryItem';
import Picker from './Picker';

class StoryList extends Component {
  _keyExtractor = (item) => item.id

  _renderItem = (props) => <StoryItem {...props} select={this.props.selectStory}/>

  componentWillMount() {
    this.props.fetchStories();
  }

  render() {
    const { stories, categories, countries, fetchStories, selectCategory, selectCountry } = this.props;

    // TODO: Declare labels as constants?
    return (
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Picker label='categories' {...categories} select={selectCategory} />
          <Picker label='countries' {...countries} select={selectCountry} />
        </View>

        <FlatList
          data={stories}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

function mapStateToProps({ stories, categories, countries }) {
  console.log(categories);
  return { stories, categories, countries }
}

export default connect(mapStateToProps, actions)(StoryList);
