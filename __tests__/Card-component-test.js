/**
 * @format
 */

import 'react-native';
import React from 'react';
import Card from '../src/components/Card';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Card renders correctly', () => {
  const tree = renderer.create(<Card />);
  expect(tree).toMatchSnapshot();
});
