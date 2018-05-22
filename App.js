import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux'
import store from './store'
import Navigator from './components/Navigator'
import {ThemeProvider} from 'styled-components'
import theme from './theme'

export default class App extends React.Component {
  render() {
    console.log("theme", theme);
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Navigator/>
        </Provider>
      </ThemeProvider>
    );
  }
}
