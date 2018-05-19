import {AsyncStorage} from 'react-native'
import decks from './intialData'
import {SAVE_DECK} from '../actions';
const DECKS = 'flashcards:decks'
const LOAD_DATA = 'flashcards:initialData'

function * initialDataLoaded() {
  let loadData = yield AsyncStorage.getItem(LOAD_DATA)
  return loadData != null
}

function * loadInitialData() {
  yield AsyncStorage.setItem(DECKS, JSON.stringify(decks))
}

export function * getDecks() {
  let loaded = yield initialDataLoaded()
  if (!loaded) {
    yield loadInitialData();
    yield AsyncStorage.setItem(LOAD_DATA, "true")
  }

  let decks = yield AsyncStorage
    .getItem(DECKS)
    .then(data => JSON.parse(data))

  return decks
}

export function * getDeck(title) {
  let decks = yield getDecks()
  return decks[title]
}

export function * saveDeck(title, questions = []) {
  yield AsyncStorage.mergeItem(DECKS, JSON.stringify({
    [title]: {
      title,
      questions
    }
  }))
}

export function * addCardToDeck({title, question}) {
  let decks = yield getDecks()
  yield saveDeck(title, decks[title].questions.concat(question))
}

export function * removeCardFromDeck({title, question}) {
  let decks = yield getDecks()
  yield saveDeck(title, decks[title].questions.filter(q => q.question !== question.question))
}