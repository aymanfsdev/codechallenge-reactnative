import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

/**
 * @author Stanley George
 * @function RoundedButton
 **/
const RoundedButton = ({textValue, onPress, color, inputStyles}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{...styles.button, backgroundColor: color, ...inputStyles}}>
        <Text style={styles.buttonText}>{textValue}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    borderColor: 'red',
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: 'orange',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
export default RoundedButton;
