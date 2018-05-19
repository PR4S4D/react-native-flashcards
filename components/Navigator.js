import {createStackNavigator} from 'react-navigation';
import Decks from '../containers/Decks'

const getOptions = (title) => ({
  title,
  headerStyle: {
    backgroundColor: '#333'
  },
  headerTitleStyle: {
    color: '#fff'
  }
})

export default createStackNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: getOptions("Decks")
  }
})