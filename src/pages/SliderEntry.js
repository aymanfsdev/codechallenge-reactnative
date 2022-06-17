import React from 'react';
import {Image, TouchableOpacity, View, Text, StyleSheet} from 'react-native';

/**
* @author Stanley George
* @function SliderEntry

**/
const SliderEntry = ({data, even}) => {
  const uppercaseTitle = data.title.toUpperCase();

  const image = (
    <Image
      style={styles.imageHolder}
      source={{
        uri: data.illustration,
      }}
    />
  );
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.slideInnerContainer}
      onPress={() => {}}>
      <View style={styles.shadow} />

      <View style={styles.imageContainer}>{image}</View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{uppercaseTitle}</Text>
        <Text style={styles.subtitle} numberOfLines={2}>
          {data.subtitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  slideInnerContainer: {width: 300, height: '90%'},
  shadow: {
    position: 'absolute',
    top: 0,
    left: 20,
    right: 20,
    bottom: 18,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 10,
    borderRadius: 16,
  },
  imageContainer: {
    flex: 1,
    marginBottom: 0, // Prevent a random Android rendering issue
    backgroundColor: 'black',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  textContainer: {backgroundColor: 'black', alignItems: 'center'},
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  imageHolder: {
    width: '100%',
    height: '90%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});
export default SliderEntry;
