/**
 * @format
 */
 import React , {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import Navigation from './src/navigator/Navigation';

class Entry extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <Navigation/>
      </Provider>
    )
  };

}
AppRegistry.registerComponent('Test', () => Entry);
