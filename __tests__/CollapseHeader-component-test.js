import React from 'react';
import {cleanup, render} from '@testing-library/react-native';

import CollapseHeader from '../src/components/CollapseHeader';

afterEach(cleanup);

describe('CollapseHeader', () => {
  it('CollapseHeader should render', () => {
    //   const helloWorldText = 'Hello World!';

    const {toJSON, getByText} = render(<CollapseHeader />);

    //    const foundHelloWorldText = getByText(helloWorldText);

    //   expect(foundHelloWorldText.props.children).toEqual(helloWorldText);
    expect(toJSON()).toMatchSnapshot();
  });
});
