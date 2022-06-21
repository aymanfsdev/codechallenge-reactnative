import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import Colors from '../Colors';

/**
 * @author Stanley George
 * @function CollapseDetails
 **/
const CollapseDetails = ({items, collapsed, onPress}) => {
  return (
    <Collapsible collapsed={collapsed} align="center">
      <View style={styles.content}>
        {items.map(treatmentItem => {
          return (
            <View key={Math.random().toString(36)} style={styles.containerView}>
              <Text style={styles.text}>{treatmentItem.title}</Text>
              <TouchableOpacity
                style={styles.webLinkContainer}
                onPress={() => {
                  onPress(treatmentItem);
                }}>
                <Text style={styles.webLink}>Learn More...</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </Collapsible>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerView: {marginTop: 5, marginLeft: 20},
  webLinkContainer: {marginBottom: 5, marginTop: 2},
  webLink: {color: 'blue'},
  text: {
    color: Colors.black,
  },
});

export default CollapseDetails;
