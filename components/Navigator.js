import {createStackNavigator} from 'react-navigation';
import Decks from '../containers/Decks'
import CreateDeck from '../containers/CreateDeck';
import DeckView from '../containers/DeckView'
import AddCard from '../containers/AddCard'

const navigationOptions = {
  headerStyle: {
    backgroundColor: '#333'
  },
  headerTitleStyle: {
    color: '#fff'
  }
}

const getOptions = (title) => ({
  title,
  ...navigationOptions
})

export default createStackNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: getOptions("Decks")
  },
  CreateDeck: {
    screen: CreateDeck,
    navigationOptions: getOptions("New Deck")
  },
  DeckView: {
    screen: DeckView,
    navigationOptions
  },
  AddCard: {
    screen: AddCard,
    navigationOptions
  }
})