import React from 'react';
import {View, Image} from 'react-native';

import GlobalStyles from '../GlobalStyles';

/**
 * @author Stanley George
 * @function Splash
 **/
const Splash = props => {
  return (
    <View style={GlobalStyles.container}>
      <View>
        <Image source={require('../../assets/logo.png')} />
      </View>
    </View>
  );
};

export default Splash;
