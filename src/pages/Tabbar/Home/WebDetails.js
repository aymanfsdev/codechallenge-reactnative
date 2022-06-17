import React from 'react';
import {Text, StyleSheet, View, ActivityIndicator} from 'react-native';

import {WebView} from 'react-native-webview';

const WebDetails = props => {
  function LoadingIndicatorView() {
    return <ActivityIndicator color="#009b88" size="large" />;
  }

  return (
    <View style={styles.screen}>
      <View style={styles.urlContainer}>
        <Text>{props.route.params.url}</Text>
      </View>

      <WebView
        style={styles.webView}
        renderLoading={LoadingIndicatorView}
        source={{uri: props.route.params.url}}
        startInLoadingState={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginBottom: 10,
  },
  urlContainer: {
    alignItems: 'center',
    backgroundColor: 'grey',
    padding: 5,
  },
  webView: {backgroundColor: 'gray'},
});
export default WebDetails;
