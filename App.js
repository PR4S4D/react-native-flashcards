import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux'
import store from './store'
import Decks from './components/Decks'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Decks/>
      </Provider>
    );
  }
}
