/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import App from '../App';

it('renders correctly', () => {
  const store = mockStore({ count: 1 });

  const rendered = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
});

describe();
