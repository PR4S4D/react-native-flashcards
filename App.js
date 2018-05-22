import React from 'react';
import {Provider} from 'react-redux'
import store from './store'
import Navigator from './components/Navigator'
import {setLocalNotification} from './utils/notification'

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <Navigator/>
      </Provider>
    );
  }
}
