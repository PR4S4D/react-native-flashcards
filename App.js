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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

/*       <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View> */