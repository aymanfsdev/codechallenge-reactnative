import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

/**
 * @author Stanley George
 * @function More
 **/
const More = props => {
  return (
    <View style={styles.container}>
      <Text>More</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default More;
