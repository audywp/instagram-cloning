import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigations from './src/Shared/Navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Persistor, Store} from './src/Store/Store';

export default function App() {
  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistor}>
        <NavigationContainer>
          <Navigations />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
