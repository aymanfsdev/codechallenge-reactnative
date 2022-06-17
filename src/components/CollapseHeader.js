import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import Color from '../Colors';
/**
 * @author Stanley George
 * @function CollapseHeader
 **/
const CollapseHeader = ({collapsed, onPress, title}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>

      <TouchableOpacity
        onPress={onPress}
        style={styles.expandCollapseButtonContainer}>
        {collapsed && (
          <Ionicons name="chevron-down-outline" size={25} color="gray" />
        )}
        {!collapsed && (
          <Ionicons name="chevron-up-outline" size={25} color="gray" />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    marginTop: 20,
    marginLeft: 20,
    flexDirection: 'row',
    alignContent: 'center',
  },
  headerTextContainer: {
    flexDirection: 'column',
    backgroundColor: '#b3d4fc',
    justifyContent: 'center',
  },
  headerTitle: {
    marginLeft: 5,
    width: 300,
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
  },
  expandCollapseButtonContainer: {
    backgroundColor: Colors.ltBlue,
    paddingRight: 5,
  },
});

export default CollapseHeader;
