import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

import styles from './styles';

import AppNavigator from './components/AppNavigator';

/* Redux Store Bootstrapping */
const rootReducer = combineReducers({
  form: formReducer,
});
const store = createStore(rootReducer);


export default class App extends React.Component {
  render() {
    return (
      
      <StoreProvider store={store}>
        <ApplicationProvider {...eva} theme={eva.dark}>       
          <AppNavigator />
        </ApplicationProvider>     
      </StoreProvider>
       
    );
  }
}


