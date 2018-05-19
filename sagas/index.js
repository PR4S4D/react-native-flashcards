import {put, takeEvery, call} from 'redux-saga/effects'
import * as ACTIONS from '../actions'
import decks from '../utils/intialData'
import * as API from '../utils/api'

function * fetchDecks() {
  let decks = yield API.getDecks()
  yield put({type: ACTIONS.DISPLAY_DECKS, payload: decks})
}

function * saveDeck(action) {
  yield API.saveDeck(action.payload)
  yield fetchDecks()
}

function * addCardToDeck(action) {
  yield API.addCardToDeck(action.payload)
  yield fetchDecks()
}

function * removeCard(action) {
  yield API.removeCardFromDeck(action.payload)
  yield fetchDecks()
}

function * rootSaga() {
  yield[takeEvery(ACTIONS.FETCH_DECKS, fetchDecks),
    takeEvery(ACTIONS.SAVE_DECK, saveDeck),
    takeEvery(ACTIONS.ADD_CARD, addCardToDeck),
    takeEvery(ACTIONS.REMOVE_CARD, removeCard)]
}

export default rootSaga
