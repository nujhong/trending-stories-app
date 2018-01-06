import React from 'react';
import { connect } from 'react-redux';
import { View, Image, StyleSheet, Platform, Linking } from 'react-native';
import { Text, ListItem } from 'react-native-elements';
import * as actions from '../actions';

const StoryItem = ({ item, index, select }) => {
  const {
    thumbnail, caption, captionContainer, container, wrapper, title, subtitle, source
  } = styles;

  return (
    <ListItem
      onPress={() => Linking.openURL(`https://trends.google.com/trends/story/${item.id}`)}
      leftIcon={
        <View>
          <Image
            source={{uri: `https:${item.image.imgUrl}`}}
            style={thumbnail}
          />
          <View style={captionContainer} />
          <Text style={caption}>{++index}</Text>
          <Text style={source}>{item.image.source}</Text>
        </View>
      }
      containerStyle={container}
      wrapperStyle={wrapper}
      title={item.title}
      titleStyle={title}
      titleNumberOfLines={2}
      subtitle='Read More'
      subtitleStyle={subtitle}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: 'center',
    paddingTop: 0,
    paddingLeft: 0,
    paddingBottom: 0,
    paddingRight: 0
  },
  wrapper: {
    marginLeft: 0
  },
  title: {
    marginLeft: 10,
    fontWeight: 'bold',
    ...Platform.select({
      android: {
        fontFamily: 'Roboto'
      }
    })
  },
  subtitle: {
    marginLeft: 10
  },
  source: {
    color: 'white',
    position: 'absolute',
    textAlign: 'center',
    left: 0,
    right: 0,
    bottom: 15,
    fontSize: 10
  },
  thumbnail: {
    position: 'relative',
    height: 100,
    width: 100
  },
  captionContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 30,
    borderTopWidth: 30,
    borderRightColor: 'transparent',
    borderTopColor: '#27ae60'
  },
  caption: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 0,
    left: 0,
    width: 15,
    textAlign: 'center',
    color: '#ecf0f1',
    fontSize: 10
  }
});

export default connect(null, actions)(StoryItem);
