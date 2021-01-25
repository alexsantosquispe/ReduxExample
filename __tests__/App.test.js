import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import App from '../app/App';

const mockStore = configureStore([]);

describe('Redux test', () => {
  let defaultStore, component;

  beforeEach(() => {
    defaultStore = mockStore({
      count: 0,
      countReducer: {
        count: 0
      }
    });

    component = renderer.create(
      <Provider store={defaultStore}>
        <App />
      </Provider>
    );
  });

  it('This component should render with a given state from store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
