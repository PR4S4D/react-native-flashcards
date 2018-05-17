import {AsyncStorage} from 'react-native'
import decks from './intialData'
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

export function * getAsyncDecks() {
  return AsyncStorage
    .getItem(DECKS)
    .then(data => data)
}