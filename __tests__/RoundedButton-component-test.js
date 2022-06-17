/**
 * @format
 */

import 'react-native';
import React from 'react';
import RoundedButton from '../src/components/RoundedButton';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('RoundedButton renders correctly', () => {
  const tree = renderer.create(
    <RoundedButton
      textValue="Test"
      color="blue"
      inputStyles={{width: 200, marginTop: 5}}
      onPress={() => {}}
    />,
  );
  expect(tree).toMatchSnapshot();
});
