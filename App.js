import * as React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

import AppNavigator from './components/AppNavigator';

/* Redux Store Bootstrapping */
const rootReducer = combineReducers({
  form: formReducer,
});
const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
    return (
      
        <ApplicationProvider {...eva} theme={eva.dark}>
            <StoreProvider store={store}>      
                <AppNavigator />
            </StoreProvider>
        </ApplicationProvider>     
      
    );
  }
}


