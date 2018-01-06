import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

const Picker = ({ label, items, selected, select }) => {
  const { value } = items[selected];
  return (
    <Dropdown
      containerStyle={styles.picker}
      data={items}
      dropdownPosition={0}
      itemCount={items.length>8 ? 8 : items.length}
      label={label}
      onChangeText={(value, index, data) => {
        select(index)
      }}
      value={value}
    />
  )
};

export default Picker;

const styles = StyleSheet.create({
  picker: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10
  }
});
