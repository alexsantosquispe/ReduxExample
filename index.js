import React from 'react';
import { AppRegistry } from 'react-native';
import App from './app/App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import configStore from './app/configStore';

const store = configStore();

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
