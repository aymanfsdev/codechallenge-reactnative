import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

import CoreApp from './CoreApp';

import appStateReducer from './store/reducers/appState';

const rootReducer = combineReducers({
  appStateSlice: appStateReducer,
});

const Stack = createStackNavigator();

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

/**
 * @author Stanley George
 * @function App
 **/
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <CoreApp />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
